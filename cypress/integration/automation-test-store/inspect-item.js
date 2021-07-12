///<reference types='Cypress'/>

describe('Test coontact-us form via Automation Test Store', () => {
    it('Click on the first item using item header', () => {
        cy.visit('https://automationteststore.com');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed').click();
    })

    it.only('Click on the first item using item text', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeaderText) => {
            console.log(itemHeaderText.text());
        })
    })

    it('Click on the first item using item index', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    })
})