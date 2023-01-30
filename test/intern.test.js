const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("it should create an Intern with proper props ", () => {
      const obj = new Intern("name", "id", "email", "school");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });

    it("Getters return the expected data ", () => {
      const name = "test";
      const id = "test";
      const email = "test";
      const school = "test";

      const obj = new Intern(name, id, email, school);

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getSchool()).toEqual(school);
    });

    it("Should error when bad constructor ", () => {
      let failed = false;
      try 
      {
        // new Intern("name", "id", "email", "school");
        new Intern();

      } catch (err) 

      {
        failed = true;
      }

      expect(failed).toEqual(true);
    });
  });
});
