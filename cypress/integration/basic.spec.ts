describe('some title', () => {
  it('should perform basic google search', () => {
    const frontendUrl: string = Cypress.env('FRONTEND_URL');

    cy.visit(frontendUrl);
  });
});
