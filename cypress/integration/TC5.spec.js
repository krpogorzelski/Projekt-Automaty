/// <reference types="cypress" />
import projekt from '../fixtures/projekt.json';

context("Fifth test on SportClub.com.pl", () => {
    describe('Lets remind password', {tags: 'local'}, () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit(Cypress.env('url'));
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('Remind password without @', () => {
            cy.get('.sign_in_link').click();
            cy.get('.password_reminder_signin').click().wait(3000);
            cy.get('#signin_pass_recover_input').type(projekt.fakemail).type('{enter}');
            cy.contains('Na Twój adres został wysłany e-mail').should('be.visible');
        })
    })
})