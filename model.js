import { createModel } from "@xstate/test";
import feedbackMachine from "./machine";
import { generateRandomString } from "./utils";

const feedbackModel = createModel(feedbackMachine).withEvents({
  GREAT: () => cy.get("button").contains("Great 😁").click(),
  BAD: () => cy.get("button").contains("Bad 😡").click(),
  CLOSE: () => cy.get("button").contains("X").click(),
  SUBMIT: {
    cases: Array(2)
      .fill()
      .map(() => ({ value: generateRandomString() })),
    exec: (page, event) => {
      cy.get("textarea").type(event.value);
      cy.get("button").contains("Submit").click();
    },
  },
  CANCEL: () => cy.get("button").contains("Cancel").click(),
  ESCAPE: () => cy.get("body").type("{esc}"),
});

export default feedbackModel;
