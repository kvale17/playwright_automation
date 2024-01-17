const { test, expect } = require("@playwright/test");
const productName = "Proteus Fitness Jackshirt";

test.beforeEach(async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
});

test("Can add a product to the cart", async ({ page }) => {
  //Go to Men's Jackets
  await page.getByRole("menuitem", { name: " Men" }).hover();
  await page.getByRole("menuitem", { name: "Tops" }).hover();
  await page.getByRole("menuitem", { name: "Jackets" }).click();

  //Add product to cart
  const product = page.locator(`.product-item-info:has-text(${productName})`);
  await product.getByRole("option", { name: "XS" }).click();
  await product.getByRole("option", { name: "Black" }).click();
  await product.getByRole("button", { name: "Add to Cart" }).click();

  //Assert mini cart count is 1

  await expect(page.locator(".counter-number")).toHaveText("1");

  //Assert product is in the cart

  await page.locator(".showcart").click();

  const miniCartDialog = page.locator(".block-minicart");

  await expect(miniCartDialog.locator(".product-item-name")).toHaveText(productName);
});
