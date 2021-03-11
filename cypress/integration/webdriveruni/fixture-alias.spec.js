/// <reference types="Cypress" />

describe("Handle Fixture with alias data", () => {

    before(() => {
        cy.fixture('submit').as('user')
    })

    it('Should submit form with fixture data', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})

        cy.get('@user').then((user) => {
            cy.get('[name="first_name"]').type(user.firstName)
            cy.get('[name="last_name"]').type(user.lastName)
            cy.get('[name="email"]').type(user.email)
            cy.get('[name="message"]').type(user.message)
        })
        
        cy.contains('SUBMIT').click()
    });

})