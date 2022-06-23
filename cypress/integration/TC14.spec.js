/// <reference types="cypress" />
import projekt from '../fixtures/projekt.json';

context("Fourteenth test on Poranny", () => {
    describe('Lets register on Poranny site', {tags: 'local'}, () => {
        it('Try to register with false data', () => {
            cy.visit('https://poranny.pl/logowanie').wait(500);
            // cy.get('#didomi-notice-agree-button').click().wait(500);
            cy.get('#forum-login-panel').type(projekt.email);
            cy.get('#forum-haslo-panel').type(projekt.password);
            cy.get('#forum-przycisk').click();
            cy.contains('Podany email lub hasło nie są poprawne').should('be.visible');
        })
    })
})