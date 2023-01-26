function generateManagerHTML(manager) {
  return `
  <div class="col-md-3">
  <div class="card text-white bg-dark mb-3">
    <div class="card-header">
    <div>${manager.getName()}</div>
    <div>${manager.getRole()}</div>
    </div>
    <div class="card-body">
      <p class="card-text">
        <div >Id: ${manager.getId()}</div>
        <div >Email: ${manager.getEmail()}</div>
        <div >Office number: ${manager.getOfficeNumber()}</div>
      </p>
    </div>
  </div>
  </div>
  `;
}

function generateEngineerHTML(engineer) {
  return `
  <div class="col-md-3">
  <div class="card text-white bg-dark mb-3">
    <div class="card-header">
    <div>${engineer.getName()}</div>
    <div>${engineer.getRole()}</div>
    </div>
    <div class="card-body">
      <p class="card-text">
        <div >Id: ${engineer.getId()}</div>
        <div >Email: ${engineer.getEmail()}</div>
        <div >Github: ${engineer.getGithub()}</div>
      </p>
    </div>
  </div>
  </div>
  `;
}
function generateInternHTML(intern) {
  return `
  <div class="col-md-3">
  <div class="card text-white bg-dark mb-3">
    <div class="card-header">
    <div>${intern.getName()}</div>
    <div>${intern.getRole()}</div>
    </div>
    <div class="card-body">
      <p class="card-text">
        <div >Id: ${intern.getId()}</div>
        <div >Email: ${intern.getEmail()}</div>
        <div >School: ${intern.getSchool()}</div>
      </p>
    </div>
  </div>
  </div>
  `;
}


function generateHTML(employees) {
  let employeeCardsHTML = "";

  for (const employee of employees) {
    if(employee.getRole() == "Engineer"){
      employeeCardsHTML += generateEngineerHTML(employee)
    } else if (employee.getRole() == "Manager"){
      employeeCardsHTML += generateManagerHTML(employee)
    } else if (employee.getRole() == "Intern"){
      employeeCardsHTML += generateInternHTML(employee)
    }
    
  }

  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Team</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!--MDB (BS on steriods !)-->
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"
    ></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <!-- (MDB) Bootstrap CSS -->
    <link rel="stylesheet" href="./Assets/CSS/style.css" />
    <!-- Font Awesome -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <!-- MDB -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css"
      rel="stylesheet"
    />
  </head>

  <!-- BODY -->
  <body>
    <!-- Play with BS later for style-->

    <!-- HEADER -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div
          class="container d-flex justify-content-center"
          style="color: white"
        >
          TEAM
        </div>
      </nav>
    </header>
    <!-- END HEADER-->

    <!-- BEGIN-Left Col -->
    <div class="container-fluid" style="margin-top:10px;">
      <div class="row mb-3">
        ${employeeCardsHTML}
      </div>
    </div>
  </body>
</html>

  `;
  return html;
}

module.exports = generateHTML;
