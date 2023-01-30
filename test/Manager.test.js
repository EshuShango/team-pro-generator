const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("it should create a Manager with proper props ", () => {
      const obj = new Manager("name", "id", "email", "officeNumber");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("officeNumber" in obj).toEqual(true);
    });

    it("Getters return the expected data ", () => {
      const name = "test";
      const id = "test";
      const email = "test";
      const officeNumber = "test";

      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    });

    it("Should error when bad constructor ", () => {
      let failed = false;
      try {
        new Manager();
      } catch (err) {
        failed = true;
      }

      expect(failed).toEqual(true);
    });
  });
});
