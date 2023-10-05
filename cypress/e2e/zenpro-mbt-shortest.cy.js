import model from "../../model";

const testPlans = model.getShortestPathPlans();

let count = 0;

describe("ZenPro MBT", () => {
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach((path) => {
        it(`[${++count}] ${path.description}`, () => {
          return cy.visit("https://zenpro.id").then(() => {
            return path.test(cy); // Execute the test path
          }); // Visit your local site
        });
      });
    });
  });

  console.log(`${count} test cases generated`);

  describe("coverage", () => {
    it("should pass", () => {
      model.testCoverage();
    });
  });
});
