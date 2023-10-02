import { faker } from "@faker-js/faker";

function addTests(state, tests) {
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

export const generateRandomString = () => {
  const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const generators = [
    () => faker.lorem.words(1),
    () => faker.string.alphanumeric(3),
    () => faker.string.sample(10),
    () => faker.string.symbol(10),
    () => faker.string.uuid(),
  ];

  return Array(5)
    .fill()
    .map(() => randomElement(generators)())
    .join(" ");
};

export default addTests;
