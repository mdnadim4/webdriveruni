/// <reference types="Cypress" />

describe("Handle Fixture JSON Data", () => {

    it('Handling Autocomplete data', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})

        cy.get('#myInput').type('A')
        // cy.contains('Almond').click()
        // cy.get('#myInput').should('have.value', 'Almond')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
        
            const listItem = $el.text();
            const selectItem = "Almond";

            if(listItem === selectItem) {
                cy.wrap($el).click();
                cy.get('#submit-button').click()
                cy.url().should('include', selectItem)
            }
        }).then(() => {

            cy.get('#myInput').type('G')

            const listItem = $el.text();
            const selectItem = "Grapes";

            if(listItem === selectItem) {
                cy.wrap($el).click()
                cy.get('#submit-button').click()
                cy.url().should('include', selectItem)
            }
        })


    });

})