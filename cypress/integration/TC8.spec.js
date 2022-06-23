/// <reference types="cypress" />

context("Eighth test on SportClub.com.pl", () => {
    describe('Lets change language', () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('Change language', () => {
            cy.get('.currency_setting').click().wait(300);
            cy.get('.option').click();
            cy.contains('€').should('be.visible');
        })
    })
})