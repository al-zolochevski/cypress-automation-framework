///<reference types='Cypress'/>

describe('Test coontact-us form via Automation Test Store', () => {
    before(function () {
        cy.viewport(550, 750);
        cy.fixture("userDetails").as("user");
    })
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href$="contact"]').click().then((target) => {
            cy.log(target.text());
        })

        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.firstName);
            cy.get('#ContactUsFrm_email').type(user.email);
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('Lorem ipsum dolor sit amet, consectetur');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    })
})