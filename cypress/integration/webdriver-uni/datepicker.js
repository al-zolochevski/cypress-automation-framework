///<reference types='cypress'/>

describe("Test Datepicker", () => {

    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
        cy.get('.input-group-addon').click();
    })

    it('Select date from the datepicker', () => {
        const date = new Date();
        date.setDate(date.getDate() + 1000);

        const futureYear = date.getFullYear();
        const futureMonth = date.toLocaleString("default", { month: "long" });
        const futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectmonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectmonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectmonthAndYear();
                    }
                })
            })
        }
        selectmonthAndYear();
    })
})