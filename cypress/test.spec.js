describe("Логин пользователя и выход", () => {
  it("Вход в систему", () => {
    cy.visit("/login");
    cy.get("#username").should("exist");
    cy.get("#password").should("exist");
    cy.get("#username").type("example_user");
    cy.get("#password").type("securepassword");
    cy.get('button[type="submit"]').click();
    cy.contains(
      "Форма успешно валидирована. Логин: example_user, Пароль: securepassword"
    ).should("be.visible");
  });

  it("Выход из системы", () => {
    cy.get("#logout-button").click();
    cy.url().should("eq", "expected_logout_url");
  });
});
