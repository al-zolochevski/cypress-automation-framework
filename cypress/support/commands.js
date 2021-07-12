// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => { 
    cy.visit("http://webdriveruniversity.com/");
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", () => { 
    cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
})

Cypress.Commands.add("selectProduct", poductName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(poductName)) {
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add("addProductToBasket", poductName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === poductName) {
            cy.get('.productcart').eq(index).click()
        }
    })
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
