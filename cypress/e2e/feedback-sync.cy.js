import model from "../../model";

const testPlans = model.getSimplePathPlans();
describe("feedback machine", () => {
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach((path) => {
        it(path.description, () => {
          return cy.visit("https://zenpro.id").then(() => {
            return path.test(cy); // Execute the test path
          }); // Visit your local site
        });
      });
    });
  });

  describe("coverage", () => {
    it("should pass", () => {
      model.testCoverage();
    });
  });
});
