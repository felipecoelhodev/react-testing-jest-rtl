describe("deveria excluir um item", () => {
  it("excluir-item", function () {
    cy.visit(""); //COLOCAR URL GERADA PELO NPM START

    cy.contains("Teste para Cypress", { timeout: 6000 })
      .parent()
      .find("[aria-label='delete']")
      .click();

    cy.contains("Teste para Cypress").should("not.exist");
  });
});
