import feedbackModel from "../../model";

const testPlans = feedbackModel.getSimplePathPlans();
describe("feedback machine", () => {
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach((path) => {
        it(path.description, () => {
          return cy.visit("http://localhost:3000").then(() => {
            return path.test(cy); // Execute the test path
          }); // Visit your local site
        });
      });
    });
  });

  describe("coverage", () => {
    it("should pass", () => {
      feedbackModel.testCoverage();
    });
  });
});
