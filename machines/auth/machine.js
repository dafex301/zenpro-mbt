import { createMachine } from "xstate";

const machine = createMachine({
  id: "zenpro",
  initial: "unauthenticated",
  states: {
    authenticated: {
      id: "authenticated",
    },
    unauthenticated: {
      id: "unauthenticated",
      initial: "initHomePage",
      states: {
        initHomePage: {
          on: {
            LOGIN: "loginPage",
          },
        },
        loginPage: {
          on: {
            SIGN_UP: "signUpPage",
            FORGOT_PASSWORD: "forgotPasswordPage",
            LOGGING_IN: "#authenticated",
          },
        },
        signUpPage: {
          on: {
            LOGIN_SIGN_UP: "loginPage",
            SIGNING_UP: "verifyPage",
          },
        },
        forgotPasswordPage: {
          on: {
            FORGOTTING_PASSWORD: "loginPage",
          },
        },
        verifyPage: {},
      },
    },
  },
});

export default machine;
