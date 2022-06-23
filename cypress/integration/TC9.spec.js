/// <reference types="cypress" />

context("Ninth test on SportClub.com.pl", () => {
    describe('Lets check PRO gear or outfit', () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('Click on PRO gear or outfit', () => {
            cy.get('#main_cms2').click().wait(300);
            cy.contains('Szukany produkt nie został znaleziony').should('be.visible');
        })
    })
})