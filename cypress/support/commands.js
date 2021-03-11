// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("addComment", () => {
    cy.visit('https://webdriveruniversity.com')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
    cy.get('[name="first_name"]').type(user.firstName)
    cy.get('[name="last_name"]').type(user.lastName)
    cy.get('[name="email"]').type(user.email)
    cy.get('[name="message"]').type(user.message)
    cy.contains('SUBMIT').click()
})