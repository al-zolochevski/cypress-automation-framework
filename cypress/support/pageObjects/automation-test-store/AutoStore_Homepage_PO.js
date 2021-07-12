class autoStoreHomePage_PO {
    visitHomePage() {
        cy.visit("https://automationteststore.com/");
    }

    clickOnHairCareLink() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}

export default autoStoreHomePage_PO;