const { Given, When, Then } = require("@cucumber/cucumber");
const { Catalog } = require("../../tests/pageobjects/Catalog");

const productName = "Proteus Fitness Jackshirt";

Given(
  "the user is viewing the catalog", { timeout: 30 * 1000 }, async function () {
    await this.page.goto("https://magento.softwaretestingboard.com/");

    this.catalog = new Catalog(this.page); 

    await this.catalog.goToCatalog("Men", "Tops", "Jackets");
  }
);

When("the user selects a products options and clicks Add to Cart", async function () {
    this.catalog.addProductToCart(productName, "XS", "Black");
  }
);

Then("then the specified product is added to the cart", { timeout: 30 * 1000 }, async function () {
  await this.catalog.assertMiniCartCount(1);

  await this.catalog.assertProductInCart(productName);
});
