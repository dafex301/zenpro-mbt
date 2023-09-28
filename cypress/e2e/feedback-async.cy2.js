import feedbackModel from "../../model";

const testPlans = feedbackModel.getSimplePathPlans();
testPlans.forEach((plan, planIndex) => {
  describe(`Plan ${planIndex}: ${plan.description}`, () => {
    // Start with an empty list for the failur patterns for this plan.
    plan.paths.forEach((path, pathIndex) => {
      it(`Path ${pathIndex}: ${path.description}`, () => {
        cy.visit(`http://localhost:3000`);

        return new Cypress.Promise(async (resolve) => {
          await path.test();
          resolve();
        });
      });
    });
  });
});
