export const guards = {
  guards: {
    canAccessNavbar: (context, event, { state }) => {
      return (
        !state.matches("authenticated.profilePage.subscriptionModal") &&
        !state.matches("authenticated.practicePage.ongoing")
      );
    },
  },
};
