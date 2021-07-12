///<reference types='cypress'/>

describe("handling Iframe and Modals", () => {
    
    it("handling Iframe", () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#frame').then((iframe) => {
            const iframeBody = iframe.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should((expectedText) => {
            const text = expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        });

        cy.get('@modal').contains('Close').click();
    });
})