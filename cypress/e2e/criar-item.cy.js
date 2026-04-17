describe("deveria criar um item", () => {
  it("deveria criar um item", () => {
    cy.visit(""); // COLOCAR URL GERADA PELO NPM START
    cy.get(".fab").click();
    cy.get("input[name='description']").type("Teste para Cypress");
    cy.get("button[type='submit']").click();
    cy.contains("Teste para Cypress", { timeout: 5000 });
  });
});
