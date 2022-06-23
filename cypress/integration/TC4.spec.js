/// <reference types="cypress" />

context("Fourth test on SportClub.com.pl", () => {
    describe('Buy some balls', {tags: 'local'}, () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit('https://www.sportclub.com.pl/product-pol-35336-pilki-tenisowe-HEAD-4B-HEAD-PRO-571604.html');
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('Add to basket', () => {
            cy.get('.projector_butttons_buy').click();
            cy.get('.add_butttons_gotobasket').click();
            cy.url().should("contain", 'basket');
        })
    })
})