///<reference types='cypress'/>

describe('Interact with dropdown lists', () => {

    it('Select specific values via select dropddownlist', () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven')
        cy.get('#dropdowm-menu-3').select('css').contains('CSS')
    })

    it.only('Select specific values via select dropddownlist', () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click();
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
        //TestNG by text
    })
})