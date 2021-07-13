class HomePage_PO {

    visitHomePage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 6000})
    }

    clickOnContactUsSection() {
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    }
}

export default HomePage_PO;