import HomePage_PO from "../../support/webdriver-uni/Homepage_PO";
import ContactUs_PO from "../../support/webdriver-uni/Contact_Us_PO";

///<reference types='cypress'/>

describe('Test coontact-us form via WebdriverUnit', () => {
    const homepage_PO = new HomePage_PO();
    const contactUs_PO = new ContactUs_PO();

    before(() => {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        });
        
    })

    beforeEach(() => {
        homepage_PO.visitHomePage();
        homepage_PO.clickOnContactUsSection();
    })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('eq', 'WebDriver | Contact Us')
        contactUs_PO.ContactForm_Submission(data.firstName, data.lastName, data.email, data.comment, 'h1', 'Thank You for your Message!');
    })

    it('Should be able to submit a successful submission via contact us form as all fields are required', () => {
        contactUs_PO.ContactForm_Submission(data.firstName, data.lastName, "", data.comment, 'body', 'Error: all fields are required');
    })
})