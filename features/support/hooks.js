const { Before, After, Status } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");

Before(async function () {
  const browser = await playwright.chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function ({ result }) {
  if (result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();

    await this.page.screenshot({
      path: "test-results/screenshots/screenshot.png",
    });

    this.attach(buffer.toString("base64"), "base64:image/png");
    console.log("Screenshot logged");
  }
});
