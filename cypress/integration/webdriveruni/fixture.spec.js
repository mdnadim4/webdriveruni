/// <reference types="Cypress" />

describe("Handle Fixture JSON Data", () => {

    before(() => {
        cy.fixture('submit').then((user) => {
            globalThis.user = user;
        })
    })

    it('Should submit form with fixture data', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.get('[name="first_name"]').type(user.firstName)
        cy.get('[name="last_name"]').type(user.lastName)
        cy.get('[name="email"]').type(user.email)
        cy.get('[name="message"]').type(user.message)
        cy.contains('SUBMIT').click()
    });

})