const { expect } = require("@playwright/test");
class Catalog {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart(name, size, color) {
    const product = await this.page.locator(`.product-item-info:has-text('${name}')`);

    await product.getByRole("option", { name: size }).click();
    await product.getByRole("option", { name: color }).click();
    await product.getByRole("button", { name: "Add to Cart" }).click();
  }

  async assertMiniCartCount(count) {
    await this.page.locator(".counter-label span").waitFor();

    await expect(this.page.locator(".counter-number")).toHaveText(
      count.toString()
    );
  }
  async goToCatalog(gender, category, type) {
    await this.page.getByRole("menuitem", { name: " " + gender }).hover();
    await this.page.getByRole("menuitem", { name: category }).hover();
    await this.page.getByRole("menuitem", { name: type }).click();
  }

  async assertProductInCart(name) {
    await this.page.locator(".showcart").click();

    const miniCartDialog = this.page.locator(".block-minicart");

    await expect(miniCartDialog.locator(".product-item-name")).toHaveText(name);
  }
}
module.exports = { Catalog };
