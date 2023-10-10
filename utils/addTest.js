export default function addTests(state, tests) {
  return {
    ...state,
    states: Object.entries(state.states).reduce((s, [stateKey, stateValue]) => {
      let newStateValue = {
        ...stateValue,
        meta: {
          ...stateValue.meta,
          test: tests[stateKey],
        },
      };

      // If the state has nested states, recursively apply addTests
      if (stateValue.states) {
        newStateValue = addTests(newStateValue, tests);
      }

      return {
        ...s,
        [stateKey]: newStateValue,
      };
    }, {}),
  };
}
