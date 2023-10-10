const events = {
  HOME: () => cy.get("button").contains("Home").click(),
  PROFILE: () => cy.get("button").contains("Fahrel Gibran").click(),
  MATERI: () => cy.get("button").contains("Katalog Skills").click(),

  VALID_SEARCH: () => {
    cy.wait(2000);
    cy.get(".mui-1yxmbwk").click();
    cy.wait(2000);
    cy.get(".MuiInputBase-input").type("Fundamental");
    cy.get(".MuiInputBase-input").type("{enter}");
  },
  INVALID_SEARCH: () => {
    cy.wait(2000);
    cy.get(".mui-1yxmbwk").click();
    cy.wait(2000);
    cy.get(".MuiInputBase-input").type("asdasdasd");
    cy.get(".MuiInputBase-input").type("{enter}");
  },

  SELECT_MATERI: () => cy.get("div").contains("Mulai belajar").click(),

  VIEW_ACCOUNT: () => cy.get("button").contains("Akun Saya").click(),
  PASSWORD: () => cy.get("button").contains("Kata Sandi").click(),
  SUBSCRIPTION: () => cy.get("button").contains("Pengaturan Paket").click(),
  LOGOUT: () => cy.get("button").contains("Keluar").click(),

  EDIT_ACCOUNT: () => cy.get("button").contains("Edit Profile").click(),
  CANCEL_EDIT_ACCOUNT: () => cy.get("button").contains("Cancel").click(),
  SAVE_EDIT_ACCOUNT: () => {
    // TODO: fill some field
    cy.get("button").contains("Save").click();
  },
  SAVING_ACCOUNT: () => cy.wait(1000),

  EDIT_PASSWORD: () => cy.get("button").contains("Edit Password").click(),
  SAVE_PASSWORD: () => {
    cy.get(":nth-child(4) > .MuiInputBase-root > .MuiInputBase-input").type(
      "12345678"
    );
    cy.get(".mt-4 > .MuiInputBase-root > .MuiInputBase-input").type("12345678");
    cy.get("button").contains("Save").click();
  },
  PASSWORD_SAVED: () => cy.wait(1000),

  BUY_SUBSCRIPTION: () => cy.get("button").contains("Beli Paket").click(),
  ESCAPE: () => cy.get("body").type("{esc}"),
  CLOSE_MODAL: () => cy.get("button.mui-1yxmbwk").click(),
  SUBS_FREE: () => cy.get("div").contains("30 days").click(),
  SUBS_90: () => cy.get("div").contains("90 days").click(),
  SUBS_180: () => cy.get("div").contains("180 days").click(),
  SUBS_365: () => cy.get("div").contains("365 days").click(),
  BUY_SUBS_BTN: () => cy.get("button.mui-1c8aokk").contains("Beli").click(),

  LEARN: () => cy.get("button").contains("Reading Materials").click(),

  // TODO: maybe delete the waiting time if it's already stable
  PRACTICE: () => {
    cy.wait(2000);
    cy.get("button").contains("Latihan").click();
  },

  // TODO: maybe delete the waiting time if it's already stable
  FINISH: () => {
    cy.wait(2000);
    cy.get("button").contains("Selesai").click();
  },
  NEXT: () => cy.get("button").contains("Selanjutnya").click(),
  HOME_PRACTICE: () => cy.get("button").contains("Home").click(),

  BERANDA: () => cy.get("button").contains("Home").click(),
  CONTINUE: () => cy.get("button").contains("Lanjutkan Training").click(),

  SEARCHED_MATERI: () => cy.get("div").contains("Kita hidup di zaman").click(),

  LOGIN: () => {
    cy.wait(2000);
    cy.get("button").contains("Login").click();
  },
  SIGN_UP: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("a").contains("Daftar").click();
    }),
  FORGOT_PASSWORD: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("a").contains("Lupa Kata Sandi?").click();
    }),

  LOGGING_IN: () => {
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("#username").type("lfahrel@gmail.com");
      cy.get("#password").type("12345678");
      cy.get("#password").type("{enter}");
    });
  },

  LOGIN_SIGN_UP: () =>
    cy.origin("https://keycloak.zenius.net", () =>
      cy.get("a").contains("Masuk").click()
    ),
  SIGNING_UP: () =>
    cy.origin("https://keycloak.zenius.net", () => {
      cy.get("#firstName").type("Fahrel MBT");
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
};

export default events;
