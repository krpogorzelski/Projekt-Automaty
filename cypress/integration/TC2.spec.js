/// <reference types="cypress" />

context("Second test on SportClub.com.pl", () => {
    describe('Check logo is visible', {tags: 'local'}, () => {
        it("Open site, close popup", () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it("Check main logo", () => {
            cy.get('#logo').should('be.visible');
        })
    })
})