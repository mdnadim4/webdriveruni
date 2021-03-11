/// <reference types="Cypress" />

describe('Select Dropdown List', () => {
	before(() => {
		cy.visit('https://webdriveruniversity.com')
		cy.get('#dropdown-checkboxes-radiobuttons')
			.invoke('removeAttr', 'target')
			.click({ force: true })
	})

	it('Handling drop-down list via select option', () => {
		cy.get('#dropdowm-menu-1').select('Python').should('have.value', 'python')
		cy.get('#dropdowm-menu-2').select('Maven').contains('Maven')
		cy.get('#dropdowm-menu-3')
			.select('JavaScript')
			.should('have.value', 'javascript')
	})

	it('Handling Checkbox', () => {
		cy.get('#checkboxes > :nth-child(1) > input').as('option1')
		cy.get('@option1').check().should('be.checked')
		cy.get('#checkboxes > :nth-child(5) > input')
			.uncheck()
			.should('not.be.checked')
	})

	it.only('Handling Multiple Checkbox', () => {
		cy.get('#checkboxes > * > input').check(['option-1', 'option-2'])
	})
})
