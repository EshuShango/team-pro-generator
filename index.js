//* the line below....
//^ const inquirer = require('inquirer');

//* the line below is only utilizing what is supposed needed
//* This will only import the prompt method from the inquirer module
//* Quicker for a human to write
const { prompt } = require("inquirer");

//* the line below calls on the writeFileSync property,
//* which is a method from the fs(FileSystem) module in Node.Js

//^ const { writeFileSync } = require("fs");

//* the line below could be considered more concise, but not as
//* quick and/or clean as this ex above :const { writeFileSync } = require("fs");

//^ const fs = require('fs');
//^ const writeFileSync = fs.writeFileSync;

//* the line below could be considered cleaner and quicker
//* for a humans to write, but not as step by step
//* for a machine 
//!(becuase machines need exact info to run smoother lol)

const { writeFileSync } = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/genHTML");

let employees = [];

//* below we create a async function to validate that a real email is put within
//* the Email input etc
async function validateEmail(email) {
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return "Invalid email";
  }
  return true;
}

async function validateGithub(github) {
  // https://github.com/shinnn/github-username-regex/blob/master/index.js#L1
  let regularExpression = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  //* test is a method of re(regularExpression)
  if (regularExpression.test(github)) {
    return true;
  } else {
    return "Invalid github";
  }
}

const managerQuestions = [
  {
    type: "input",
    name: "eName",
    message: "What is the Managers Name ?",
  },
  {
    type: "input",
    name: "eId",
    message: "What is the Managers ID ?",
  },
  {
    type: "input",
    name: "eEmail",
    message: "What is the Managers Email ?",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "eOffice",
    message: "What is the Managers Office number ?",
  },
];

const mainMenuSelections = [
  {
    type: "list",
    name: "menuSelect",
    message: "Main Menu",
    choices: [
      {
        name: "Add Engineer",
        value: "engineer",
      },

      {
        name: "Add Intern",
        value: "intern",
      },
      {
        name: "Finish building team",
        value: "finish",
      },
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "eName",
    message: "What is the Engineers Name ?",
  },
  {
    type: "input",
    name: "eId",
    message: "What is the Engineers ID ?",
  },
  {
    type: "input",
    name: "eEmail",
    message: "What is the Engineers Email ?",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "eGithub",
    message: "What is the Engineers GitHub Username ?",
    validate: validateGithub,
  },
];
const internQuestions = [
  {
    type: "input",
    name: "eName",
    message: "What is the Interns Name ?",
  },
  {
    type: "input",
    name: "eId",
    message: "What is the Interns ID ?",
  },
  {
    type: "input",
    name: "eEmail",
    message: "What is the Interns Email ?",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "eSchool",
    message: "What is the Interns School ?",
  },
];
//!  Added validation to ensure 
//!that user input is in the proper format

//^ utilize the following code :

async function mainFn() {
  const managerAnswers = await prompt(managerQuestions);
  const manager = new Manager(
    managerAnswers.eName,
    managerAnswers.eId,
    managerAnswers.eEmail,
    managerAnswers.eOffice
  );
  employees.push(manager);

  let teamFin = false;

  while (!teamFin) {
    const mainMenuAnswers = await prompt(mainMenuSelections);
    if (mainMenuAnswers.menuSelect == "engineer") {
      const engineerAnswers = await prompt(engineerQuestions);
      const engineer = new Engineer(
        engineerAnswers.eName,
        engineerAnswers.eId,
        engineerAnswers.eEmail,
        engineerAnswers.eGithub
      );
      employees.push(engineer);
    } else if (mainMenuAnswers.menuSelect == "intern") {
      const internAnswers = await prompt(internQuestions);
      const intern = new Intern(
        internAnswers.eName,
        internAnswers.eId,
        internAnswers.eEmail,
        internAnswers.eSchool
      );
      employees.push(intern);
    } else if (mainMenuAnswers.menuSelect == "finish") {
      teamFin = true;
    }
  }
  //* the lines below gen HTML with the arg of employees passed in it
  //* and then writes the File
  const finalHTML = generateHTML(employees);

  writeFileSync("./output/workIndex.html", finalHTML);
}

mainFn();
