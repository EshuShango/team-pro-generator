const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("it should create an Employee with proper props ", () => {
      const obj = new Employee("name", "id", "email");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("Getters return the expected data ", () => {
      const name = "test";
      const id = "test";
      const email = "test";

      const obj = new Employee(name, id, email);

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
    });

    it("Should error when bad constructor ", () => {
      let failed = false;
      try 
      {
        // new Employee("name", "id", "email");
        new Employee();

      } catch (err) 

      {
        failed = true;
      }

      expect(failed).toEqual(true);
    });
  });
});
