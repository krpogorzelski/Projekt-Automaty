/// <reference types="cypress" />

context("Tenth test on SportClub.com.pl", () => {
    describe('Lets check clipboard', {tags: 'local'}, () => {
        beforeEach('Enter SportClub page and confirm policy', () => {
            cy.visit('https://www.sportclub.com.pl/product-pol-35336-pilki-tenisowe-HEAD-4B-HEAD-PRO-571604.html');
            cy.url().should("contain", "www.sportclub.com.pl/");
            cy.confirmPolicy()
        })
        it('Add something to basket, change site and go back to clipboard', () => {
            cy.get('#projector_button_observe').click();
            cy.get('.add_butttons_goon').click();
            cy.get('.top_logo').click();
            cy.get('.to_wishlist').click();
            cy.contains("Kod produktu").should('be.visible');
        })
    })
})