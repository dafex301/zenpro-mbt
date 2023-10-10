export const stateTests = {
  //-- Authenticated --//
  homePage: ({ contains }) => {
    contains("Ringkasan Progress");
  },
  profilePage: ({ contains }) => {
    contains("Profile Akun");
  },
  practicePage: ({ contains }) => {
    contains("Selanjutnya");
    contains("Selesai");
  },
  //-- Unauthenticated --//
  initHomePage: ({ contains }) => {
    contains("Login");
    contains("Sign Up");
  },
  //--- Keycloack ---//
  loginPage: (cy) => {
    cy.origin("https://keycloak.zenius.net", () => {
      cy.contains("Masuk");
      cy.contains("Lupa Kata Sandi?");
    });
  },
  signUpPage: ({ contains }) => {
    origin("https://keycloak.zenius.net", () => {
      contains("Ayo Daftar & Bergabung");
    });
  },
};
