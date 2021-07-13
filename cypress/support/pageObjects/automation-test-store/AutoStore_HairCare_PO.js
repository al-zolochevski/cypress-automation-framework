class AutoStoreHairCare_PO {

    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle .fa-shopping-cart').click({ force: true });
    }
}

export default AutoStoreHairCare_PO;