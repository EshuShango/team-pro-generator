const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("it should create an Engineer with proper props ", () => {
      const obj = new Engineer("name", "id", "email", "github");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });

    it("Getters return the expected data ", () => {
      const name = "test";
      const id = "test";
      const email = "test";
      const github = "test";

      const obj = new Engineer(name, id, email, github);

      expect(obj.getName()).toEqual(name);
      expect(obj.getId()).toEqual(id);
      expect(obj.getEmail()).toEqual(email);
      expect(obj.getGithub()).toEqual(github);
    });

    it("Should error when bad constructor ", () => {
      let failed = false;
      try {
        // new Engineer("name", "id", "email", " github");
        new Engineer();
      } catch (err) {
        failed = true;
      }
      expect(failed).toEqual(true);
    });
  });
});
