import { createModel } from "@xstate/test";
import zenproMachine from "./machine";
import { generateRandomString } from "./utils";

const model = createModel(zenproMachine).withEvents({
  HOME: () => cy.get("button").contains("Home").click(),
  PROFILE: () => cy.get("button").contains("Fahrel Gibran").click(),
  MATERI: () => cy.get("button").contains("Materi Pelatihan").click(),

  // VALID_SEARCH: () => cy.get(".mui-1yxmbwk").click(),
  // INVALID_SEARCH: () => cy.get(".mui-1yxmbwk").click(),

  LOGOUT: () => cy.get("button").contains("Keluar").click(),

  LEARN: () => cy.get("button").contains("Belajar").click(),
  PRACTICE: () => cy.get("button").contains("Latihan").click(),

  FINISH: () => cy.get("button").contains("Selesai").click(),
  NEXT: () => cy.get("button").contains("Selanjutnya").click(),

  CONTINUE: () => cy.get("button").contains("Lanjutkan Training").click(),
  BERANDA: () => cy.get("button").contains("Beranda").click(),

  // SEARCHED_MATERI:

  LOGIN: () => cy.get("button").contains("Login").click(),
  SIGN_UP: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("a").contains("Daftar").click();
    }),
  FORGOT_PASSWORD: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("a").contains("Lupa Kata Sandi?").click();
    }),

  LOGGING_IN: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("#username").type("lfahrel@gmail.com");
      cy.get("#password").type("12345678");
      cy.get("#password").type("{enter}");
    }),

  LOGIN_SIGN_UP: () =>
    cy.origin("https://keycloak.zenius.net", () =>
      cy.get("a").contains("Masuk").click()
    ),
  SIGNING_UP: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("#firstname").type("Fahrel MBT");
      cy.get("#email").type("12345678@maildrop.cc");
      cy.get("#password").type("12345678");
      cy.get("#password-confirm").type("12345678");
      cy.get("#password-confirm").type("{enter}");
    }),

  FORGOTING_PASSWORD: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("#username").type("Forget");
      cy.get("#username").type("{enter}");
    }),
});

export default model;

// VALID_SEARCH: {
//   cases: Array(2)
//     .fill()
//     .map(() => ({ value: generateRandomString() })),
//   exec: (page, event) => {
//     cy.get("textarea").type(event.value);
//     cy.get("button").contains("Submit").click();
//   },
// },
