///<reference types='cypress'/>

describe('Verify chexkboxes', () => {

    before(() => {
        cy.navigateTo_WebdriverUni_Checkbox_Page();
    })
    it('Check and validate chexkboxes', () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check().should('be.checked')
    })

    it('Check the Third option; should be checked by default', () => {
        cy.get(':nth-child(5) > input').as('option-3');
        cy.get('@option-3').should('be.checked')
            .uncheck()
            .should('be.not.checked')
    })

    it('Check multiple checkboxes', () => {
        cy.get('input[type="checkbox"]').each(($elem) => {
            cy.wrap($elem).check().should('be.checked')
            cy.wrap($elem).uncheck().should('be.not.checked')
        })
    })

    it('Check radiobuttons', () => {
        cy.get('#radio-buttons').find('input[type="radio"]').each(($elem) => {
            cy.wrap($elem).check()
        })
    })
})