/// <reference types="cypress" />

import projekt from '../fixtures/projekt.json';
context("Thirteenth test on Poranny", () => {
    describe('Lets register on Poranny site', () => {
        it('Try to register', () => {
            cy.visit('https://poranny.pl/logowanie').wait(500);
            cy.get('#didomi-notice-agree-button').click().wait(500);
            cy.get('#forum-email').type(projekt.email);
            cy.get('#forum-haslo').type(projekt.password);
            cy.get('#forum-haslo2').type(projekt.password);
            cy.get('.checkboxKontener').type('{enter}');
            cy.contains('Wpisz kod z obrazka').should('be.visible');
        })
    })
})