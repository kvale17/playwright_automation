const { test } = require("@playwright/test");
const { Catalog } = require("./pageobjects/Catalog");

const productName = "Proteus Fitness Jackshirt";

test.beforeEach(async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
});

test("Can add a product to the cart", async ({ page }) => {
  //Go to Men's Jackets
  const catalog = new Catalog(page);
  await catalog.goToCatalog("Men", "Tops", "Jackets");

  //Add product to the cart
  await catalog.addProductToCart(productName, "XS", "Black");

  //Assert mini cart count is 1

  await catalog.assertMiniCartCount(1);

  //Assert product is in the cart

  await catalog.assertProductInCart(productName);
});
