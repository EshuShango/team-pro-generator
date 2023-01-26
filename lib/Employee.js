class Employee {
  constructor(name, id, email) {
    if (!name || !id || !email) {
      console.log({ name, id, email });
      throw new Error("MISSING EMPLOYEE INFO");
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
