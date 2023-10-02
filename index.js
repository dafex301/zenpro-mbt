const feedbackState = {
  id: "feedback",
  initial: "home",
  on: {
    ESCAPE: "closed",
    CLOSE: "closed",
  },
  states: {
    home: {
      on: {
        GREAT: "thankYou",
        BAD: "form",
      },
    },
    form: {
      on: {
        SUBMIT: "thankYou",
        CANCEL: "home",
      },
    },
    thankYou: {
      on: {},
    },
    closed: {
      type: "final",
      on: {},
    },
  },
};

const stateTests = {
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

function addTests(state, tests) {
  return {
    ...state,
    states: Object.entries(state.states).reduce((s, [stateKey, stateValue]) => {
      return {
        ...s,
        [stateKey]: {
          ...stateValue,
          meta: {
            ...stateValue.meta,
            test: tests[stateKey],
          },
        },
      };
    }, {}),
  };
}

console.log(JSON.stringify(addTests(feedbackState, stateTests), null, 2));
