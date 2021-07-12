///<reference types='Cypress'/>

describe('Alais and invoke', () => {
    before(function () {
        cy.fixture('userDetails').as('user')
    })
    it('Validate a specific hair care p', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productBlock')
        cy.get('@productBlock').its('length').should('be.gt', 5)
        cy.get('@productBlock').should('include', 'Seaweed Conditioner')
    });

    it('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productBlockMainPage')
        cy.get('@productBlockMainPage').should('have.length', 16)
        cy.get('@productBlockMainPage').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only('Calculate total of normal and sal e products', () => {
        // Cypress.currentTest.retries(2)
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('product')
        // cy.get('@product').find('.oneprice').each(($el, $index, $list) => {
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        let itemsTotal = 0;
        cy.get('@itemPrice').then(($linkText) => {
            let totalPrice = 0;
            let itemPrice = $linkText.split('$')
            for (let i = 0; i < itemPrice.length; i++) {
                totalPrice = totalPrice + Number(itemPrice[i])
                cy.log(itemPrice[i])
            }
            itemsTotal = itemsTotal + totalPrice
            cy.log(itemsTotal)
        })

        cy.get('@saleItemPrice').then(($linkText) => {
            let saleItemsPrice = 0;
            let saleItemPrice = $linkText.split('$');
            for (let i = 0; i < saleItemPrice.length; i++) {
                saleItemsPrice = saleItemsPrice + Number(saleItemPrice[i])
                cy.log(saleItemPrice[i])
            }
            itemsTotal = itemsTotal + saleItemsPrice
        })
            .then(() => {
                cy.log(itemsTotal)
                expect(itemsTotal).to.equal(640.7)
            })
    })
})