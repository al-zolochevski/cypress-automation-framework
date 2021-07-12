/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();
    })

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
    })

    it("Double click", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

        //author vision
        // cy.get('#double-click').dblclick();

        //my draft
        cy.get('#double-click').dblclick();
        cy.get('#double-click.double').should('have.css', 'background-color', 'rgb(147, 203, 90)');
    })

    it.only("Holddown the left mouse click button", () => {
        cy.visit('http://webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click();

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
            expect($element).to.have.text('Well done! keep holding that click now.....')
        })
    })
})