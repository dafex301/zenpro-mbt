export const zenproState = {
  id: "zenpro",
  initial: "homePage",
  states: {
    homePage: {
      on: {
        LOGIN: "loginPage",
        // SIGNUP: "signUpPage",
      },
    },
    loginPage: {
      on: {
        LOGGING_IN: "authHomePage",
        SIGNUP: "signUpPage",
        FORGOT_PASSWORD: "forgotPasswordPage",
      },
      states: {
        authHomePage: {
          on: {
            PROFILE: "profilePage",
            MATERI: "materiPage",
            FAQ: "faqPage",
          },
        },
      },
    },
    signUpPage: {
      on: {
        SIGNING_UP: "verifyPage",
      },
    },
    forgotPasswordPage: {
      on: {
        FORGOTING_PASSWORD: "loginPage",
      },
    },
    verifyPage: {
      on: {
        VERIFYING: "authHomePage",
      },
    },
    authHomePage: {
      on: {
        PROFILE: "profilePage",
        MATERI: "materiPage",
        FAQ: "faqPage",
      },
    },
    profilePage: {
      on: {
        LOGOUT: "homePage",
        EDIT_PROFILE: "editProfilePage",
        KATA_SANDI: "kataSandiPage",
        PAKET: "paketPage",
      },
    },

    closed: {
      type: "final",
      on: {},
    },
  },
};
