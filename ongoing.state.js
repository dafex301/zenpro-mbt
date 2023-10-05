import { createMachine } from "xstate";

const machine = createMachine(
  {
    id: "zenpro",
    initial: "notAuthenticated",
    states: {
      authenticated: {
        id: "authenticated",
        initial: "homePage",
        on: {
          HOME: {
            target: "#authenticated.homePage",
            cond: "canAccessNavbar",
          },
          PROFILE: {
            target: "#authenticated.profilePage",
            cond: "canAccessNavbar",
          },
          MATERI: {
            target: "#authenticated.materiPage",
            cond: "canAccessNavbar",
          },
          VALID_SEARCH: {
            target: "#authenticated.searchPage.validSearch",
            cond: "canAccessNavbar",
          },
          INVALID_SEARCH: {
            target: "#authenticated.searchPage.invalidSearch",
            cond: "canAccessNavbar",
          },
        },
        states: {
          homePage: {
            on: {
              SELECT_MATERI: "materiPage",
            },
          },
          profilePage: {
            id: "profilePage",
            on: {
              VIEW_ACCOUNT: "#profilePage.accountPage",
              PASSWORD: "#profilePage.passwordPage",
              SUBSCRIPTION: "#profilePage.subscriptionPage",
              LOGOUT: "#notAuthenticated",
            },
            initial: "accountPage",
            states: {
              accountPage: {
                id: "accountPage",
                initial: "viewAccountPage",
                states: {
                  viewAccountPage: {
                    on: {
                      EDIT_ACCOUNT: "#accountPage.editAccountPage",
                    },
                  },
                  editAccountPage: {
                    on: {
                      CANCEL_EDIT_ACCOUNT: "#accountPage",
                      SAVE_EDIT_ACCOUNT: "savingAccount",
                    },
                  },
                  savingAccount: {
                    on: {
                      SAVING_ACCOUNT: "#accountPage",
                    },
                  },
                },
              },
              passwordPage: {
                initial: "viewPasswordPage",
                states: {
                  viewPasswordPage: {
                    on: {
                      EDIT_PASSWORD: "editPasswordPage",
                    },
                  },
                  editPasswordPage: {
                    on: {
                      SAVE_PASSWORD: "savePassword",
                    },
                  },
                  savePassword: {
                    on: {
                      PASSWORD_SAVED: "viewPasswordPage",
                    },
                  },
                },
              },
              subscriptionPage: {
                on: {
                  BUY_SUBSCRIPTION: "#subscriptionModal",
                },
              },
              subscriptionModal: {
                id: "subscriptionModal",
                on: {
                  ESCAPE: "subscriptionPage",
                  CLOSE_MODAL: "subscriptionPage",
                },
                initial: "subs90",
                states: {
                  subsFree: {
                    on: {
                      SUBS_90: "subs90",
                      SUBS_180: "subs180",
                      SUBS_365: "subs365",
                    },
                  },
                  subs90: {
                    on: {
                      SUBS_FREE: "subsFree",
                      SUBS_180: "subs180",
                      SUBS_365: "subs365",
                      BUY_SUBS_BTN: "#subsPaymentPage",
                    },
                  },
                  subs180: {
                    on: {
                      SUBS_FREE: "subsFree",
                      SUBS_90: "subs90",
                      SUBS_365: "subs365",
                      BUY_SUBS_BTN: "#subsPaymentPage",
                    },
                  },
                  subs365: {
                    on: {
                      SUBS_FREE: "subsFree",
                      SUBS_90: "subs90",
                      SUBS_180: "subs180",
                      BUY_SUBS_BTN: "#subsPaymentPage",
                    },
                  },
                },
              },
            },
          },
          subsPaymentPage: {
            id: "subsPaymentPage",
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
                  HOME_PRACTICE: "practiceModal",
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
          searchPage: {
            states: {
              validSearch: {
                on: {
                  SEARCHED_MATERI: "#authenticated.materiPage",
                },
              },
              invalidSearch: {},
            },
          },
        },
      },
      notAuthenticated: {
        id: "notAuthenticated",
        initial: "homePage",
        states: {
          homePage: {
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
  },
  {
    guards: {
      canAccessNavbar: (context, event, { state }) => {
        return (
          !state.matches("authenticated.profilePage.subscriptionModal") &&
          !state.matches("authenticated.practicePage.ongoing")
        );
      },
    },
  }
);
