/// <reference types="Cypress" />

describe("Handle JS alert", () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
    })

    it('Verify alert box content', () => {
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it('Verify confirm alert box content with OK', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it('Verify confirm alert box content with cancel', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });


})