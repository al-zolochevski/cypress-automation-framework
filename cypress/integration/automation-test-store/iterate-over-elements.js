///<reference types='Cypress'/>

describe('Iterate over element', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com');
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
    })

    it('Log information of all hair care products', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Element: ' + $el + '   Index: ' + index + '   List ' + $list)
        })
    });

    it('Add specific product to basket', () => {
        cy.selectProduct('Curls to straight Shampoo');
    });

    it('Add another specific product to basket', () => {
        cy.selectProduct('Seaweed Conditioner');
    })

    it('Add another specific product to basket', () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    })
})