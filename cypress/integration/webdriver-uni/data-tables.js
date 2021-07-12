///<reference types='cypress'/>

describe("handling Iframe and Modals", () => {

    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
    })

    it("Calculate and assert all Age of users", () => {
        let userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            let i;
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    numb += Number(userDetails[i]);
                    cy.log(numb)
                }
            }
        }).then(() => {
            expect(numb).to.equal(322);
        })
    });
});