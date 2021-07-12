import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStoreHairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStoreHairCare_PO = new AutoStoreHairCare_PO();

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_Homepage_PO.visitHomePage();
    autoStore_Homepage_PO.clickOnHairCareLink();
  });
  it("Add specific items to basket", () => {
    autoStoreHairCare_PO.addHairCareProductsToBasket()
  });
});