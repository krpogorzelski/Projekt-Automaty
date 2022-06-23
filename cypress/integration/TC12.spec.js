/// <reference types="cypress" />
import MTFpopUp from '../PageObject/MTFpopUp';
const cookie = new MTFpopUp ();

context("Twelveth test on Tennis forum", () => {
    describe('Lets talk ab tennis on forum', () => {
        it('Try to register', () => {
            cy.visit('https://www.menstennisforums.com/').wait(2000);
            cookie.selectCookieMTF().click();
            cy.get('.login-icon').click().wait(1000);
            cy.get('.join-now-btn').click().wait(3000);
            cy.contains('CAPTCHA').should('be.visible');
        })
    })
})