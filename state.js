export const zenproState = {
  id: "zenpro",
  initial: "unauthenticated",
  states: {
    authenticated: {
      id: "authenticated",
      initial: "homePage",
      on: {
        HOME: {
          target: "#authenticated.homePage",
          cond: "isNotPracticePage",
        },
        PROFILE: {
          target: "#authenticated.profilePage",
          cond: "isNotPracticePage",
        },
        MATERI: {
          target: "#authenticated.materiPage",
          cond: "isNotPracticePage",
        },
        // VALID_SEARCH: {
        //   target: "#authenticated.searchPage.validSearch",
        //   cond: "isNotPracticePage",
        // },
        // INVALID_SEARCH: {
        //   target: "#authenticated.searchPage.invalidSearch",
        //   cond: "isNotPracticePage",
        // },
      },
      states: {
        homePage: {},
        profilePage: {
          on: {
            LOGOUT: "#unauthenticated",
          },
        },
        materiPage: {
          on: {
            LEARN: "learnPage",
            PRACTICE: "practicePage",
          },
        },
        practicePage: {
          initial: "ongoing",
          states: {
            ongoing: {
              on: {
                FINISH: "finishPage",
                NEXT: "ongoing",
                // HOME_PRACTICE: "practiceModal",
              },
            },
            finishPage: {
              on: {
                BERANDA: "#authenticated.homePage",
                CONTINUE: "#authenticated.materiPage",
              },
            },
            practiceModal: {},
          },
        },
        learnPage: {},
        // searchPage: {
        //   states: {
        //     validSearch: {
        //       on: {
        //         SEARCHED_MATERI: "#authenticated.materiPage",
        //       },
        //     },
        //     invalidSearch: {},
        //   },
        // },
      },
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
};
