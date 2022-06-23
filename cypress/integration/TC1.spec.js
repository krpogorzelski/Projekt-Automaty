/// <reference types="cypress" />

context("First test on SportClub.com.pl", () => {
    describe('Enter page and confirm policy', () => {
        it("Confirm policy", () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.get('.ck_dsclr__btn_v2').should('be.visible');
            cy.confirmPolicy()
        })
    })
})