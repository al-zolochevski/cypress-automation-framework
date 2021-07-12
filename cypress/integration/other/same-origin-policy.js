///<reference types='cypress'/>

describe('Cypress web security', () => {
    it('Validate visiting two different domains', () => {
        cy.visit('http://webdriveruniversity.com/')
        // cy.visit('https://automationteststore.com/')
    })

    it('Validate visiting two different domains via user actions', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })
})
