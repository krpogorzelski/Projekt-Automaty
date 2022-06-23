/// <reference types="cypress" />

context("Sixth test on SportClub.com.pl", () => {
    describe('Back to main page', {tags: 'local'}, () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
        cy.visit(Cypress.env('url'));
        cy.url().should("contain", "www.sportclub.com.pl/");
        cy.confirmPolicy()
    })
        it('Lets back to main', () => {
        cy.get('.to_wishlist').click();
        cy.get('.top_logo').click();
        cy.url().should("contain", "https://www.sportclub.com.pl/");
        cy.get('#main_banner1').should('be.visible');
    })
})
})