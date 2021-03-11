/// <reference types="Cypress" />

describe("Handle iFrame and Modal", () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#data-table').invoke('removeAttr', 'target').click({force: true})
    })

    it('Handling Table')

})