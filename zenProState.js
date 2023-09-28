import { createMachine } from "xstate";

const machine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QC8wDsAOAnA9gOgAscBbMABQEMY80cAXAQQFc6D06BLAYwrsgGIAMgHkA4gEkAcgG0ADAF1EoDDlgdOONEpAAPRAGYA7AA48AFlkBGMwDZDlw7ICsAJkvGANCACeiF08s8OzdXKzMXfQBOSMMAX1ivVExcPAAbHCgONEoYITEJSVEAfSk5RSQQFTUNLQq9BFkvXwb4xPRsfHTM7KowfgBlcVFJAFUyMu0q9Q5NbXrGn0RZVpAkjrSMrJy+gDFhACVRYQAVIrIGfv6AdQOAEQmKqZq5paallbWUtSg0EYxtgZDSRSYpjB7KVTTWZ1RCGFxvBA2Jz6PBWGxIyIuWQuMxmfRmD7tFIAMxwWCg9EosFgAHcyRAAXtDicQWcLtc7uDKpDnjDEW48JibHiAsZZMLLE4EZYbIEbM4zJFZTizMZkQSEqsifgOsSOKlyL08kcRscuU8ZrVQPUALTuSLmJyywxK4yRBzGMyGBH6Ywo6I4-T6HGRJyyGLxTW0CBwbSfHCTHmWl4IG36GWoox4mwuF25gIIu3IwW5yUuLF48sOQnJfBEUjbRPVZN8m0uGymWRZ-Q5vOGAuLVPooKl8LY7E9ww2GvreuG6i0RgsNhoTg8PgQJtQq26RBtrGZwzZ3OY-uyTyDyxRcwKgJBicemcpOfbPAUZfsbi8SBb3nWvchHgliRLizjGDY+JIsY3qDvosh4IYhhROEEEuDExiWLmT6dJsPQwL+Lb-ggZjAQhTh+k4jgkQEcL6AiSLmFEHZBn6U4xJE2F4N8vz-L0BHQkRcKGIKAThEYwYOBB0qYaiCoQdYkrGOBxicaS5KUhQ1J0lgDJ8Y8SYCbuCCWLI9iosiSKhJhThOJE0omHguZoWhZ6quEKmavGeAAG5gFgHDEt4jb6c2hn1OW8HkWeLrhuKUT0cWlgysKGFBkKHGedqeC6vq85gPxO62liTgIWKLFurIZi2ZhCJOmYeBOmKGHgZElUuB58RAA */
    id: "zenpro",
    initial: "homePage",
    states: {
      homePage: {
        initial: "notAuthenticated", // Initial state for homePage
        states: {
          notAuthenticated: {
            on: {
              LOGIN: "#zenpro.loginPage",
            },
          },
          authenticated: {
            on: {
              PROFILE: "#zenpro.profilePage",
              MATERI: "#zenpro.materiPage",
            },
          },
        },
      },
      materiPage: {
        on: {
          PROFILE: "profilePage",
          PRACTICE: "practicePage",
          LEARN: "learnPage",
          HOME: "homePage",
        },
      },
      practicePage: {},
      learnPage: {},
      loginPage: {
        id: "loginPage", // Added an id here to allow transition from notAuthenticated state
        on: {
          LOGGING_IN: "homePage.authenticated",
          SIGNUP: "signUpPage",
          FORGOT_PASSWORD: "forgotPasswordPage",
        },
      },
      signUpPage: {
        on: {
          SIGNING_UP: "verifyPage",
        },
      },
      forgotPasswordPage: {
        on: {
          FORGETTING_PASSWORD: "loginPage",
        },
      },
      verifyPage: {},
      profilePage: {
        initial: "default",
        on: {
          HOME: "#zenpro.homePage.authenticated",
          LOGOUT: "#zenpro.homePage.notAuthenticated",
        },
        states: {
          default: {
            on: {
              EDIT_PROFILE: "edit",
            },
          },
          edit: {
            on: {
              SAVE_PROFILE: "default",
              CANCEL_PROFILE: "default",
            },
          },
        },
      },
    },
  },
  {
    guards: {
      allowProfileAccess: (context, event, meta) => {
        // You can have your condition here
        // If meta.state.value is practicePage, then return false
        return meta.state.value !== "practicePage";
      },
    },
  }
);
