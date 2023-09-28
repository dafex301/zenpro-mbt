export const stateTests = {
  home: ({ contains }) => {
    contains("Feedback Form");
    contains("Great 😁");
    contains("Bad 😡");
  },
  form: ({ contains }) => {
    contains("Feedback Form");
    contains("Submit");
    contains("Cancel");
  },
  thankYou: ({ contains }) => {
    contains("Thanks for your feedback 😁");
  },
  closed: ({ contains }) => {
    contains("Closed");
  },
};
