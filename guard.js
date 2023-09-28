export const guards = {
  guards: {
    isNotPracticePage: (context, event, { state }) => {
      return !state.matches("authenticated.practicePage.ongoing");
    },
  },
};
