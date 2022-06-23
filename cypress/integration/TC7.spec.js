/// <reference types="cypress" />

context("Seventh test on SportClub.com.pl", () => {
    describe('Lets buy something cheap', {tags: 'local'}, () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('Lets find something', () => {
            cy.get('.advanced_search').click();
            cy.get('#searching_dsc').type('{enter}');
            cy.contains('Promocja').should('be.visible');
        })
    })
})