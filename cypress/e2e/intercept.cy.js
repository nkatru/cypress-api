/// <reference types="cypress" />
import fakeData from '../fixtures/fakeData.json'
describe('Intercept', () => {


    it('Interception', () => {
        cy.intercept('GET', '**/profile', fakeData);
        cy.visit('https://qauto.forstudy.space/', {
            auth: {

                username: 'guest',
                password: 'welcome2qauto',
            }

        })
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('superTestQA@imail.com');
        cy.get('#signinPassword').type('testerQa!1');
        cy.contains('Login').click();
        cy.get('#userNavDropdown').click();
        cy.get('.dropdown-item[href="/panel/profile"]').click();
    })
})