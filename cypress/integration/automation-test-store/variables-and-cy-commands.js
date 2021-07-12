///<reference types='Cypress'/>

describe('Verifying variables, cypress commands and jQuery commands', () => {
    it('Validate properties on Contact Us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');
        // cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')

        cy.contains('#ContactUsFrm', 'Contact Us Form').then( (text) => {
            const firstName = text.find('#field_11').text()
            expect(firstName).to.contain('First name')

            //Closures
            cy.get('#field_11').then( (text) => {
                cy.log(text.text())
                cy.log(text)
            })
        })
    })
})