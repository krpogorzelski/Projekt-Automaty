/// <reference types="cypress" />

context("Third test on SportClub.com.pl", () => {
    describe('Find Nadals gear', () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('find Rafas gear', () => {
            cy.get('.ui-autocomplete-input').clear().type('Nadal').should('have.value', 'Nadal').wait(3000).type('{enter}')
            cy.url().should("contain", 'Nadal')
        })
    })
})