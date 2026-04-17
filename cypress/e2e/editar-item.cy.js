describe("deveria editar um item", () => {
  it("editar-item", function () {
    cy.visit(""); //COLOCAR URL GERADA PELO NPM START

    cy.contains("Teste para Cypress", { timeout: 6000 })
      .parent()
      .find("[aria-label='edit']")
      .click();

    cy.get("input[name='description']").clear().type("Teste ATUALIZADO para Cypress");
    cy.get("button[type='submit']").click();

    cy.contains("Teste ATUALIZADO para Cypress");
  });
});
