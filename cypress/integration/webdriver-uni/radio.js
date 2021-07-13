///<reference types='cypress'/>

describe('Verify radiobuttons', () => {
    before(() => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });
    })
    it('Check radiobuttons', () => {
        //Solution by author of the course
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
        
        //My draft
        // cy.get('#radio-buttons').find('input[type="radio"]').each(($elem) => {
        //     cy.wrap($elem).check()
        // })     
    })
    
    it('Validate the states of specific radio buttons', () => {
         //Solution by author of the course
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled')

         //My draft
        // cy.get('[value="lettuce"]').check().should('be.checked')
        // cy.get('[value="cabbage"]').should('be.disabled')
        // cy.get('[value="pumpkin"]').check().should('be.checked')
    })
})