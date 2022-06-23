/// <reference types="cypress" />

context("Eleventh test on TenisKlub.pl", () => {
    describe('Lets read sth ab tennis', {tags: 'local'}, () => {
        it('Check some magazines', () => {
            cy.visit('https://tenisklub.pl/');
            cy.get('.menu-toggle').click().wait(2000);
            cy.get('.menu-item-60681').click();
            cy.contains('Numer ').should('be.visible');
        })
    })
})