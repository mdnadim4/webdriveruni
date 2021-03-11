/// <reference types="Cypress" />

describe("Handle iFrame and Modal", () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})
    })

    it('Verify webdriveruni iFrame and Modal box', () => {
        cy.get('#frame').then((iframText) => {
            const body = iframText.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should((expectedText) => {
            expect(expectedText).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
        })

    })
})