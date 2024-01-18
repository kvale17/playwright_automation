const { Before } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");

Before(async function () {
  const browser = await playwright.chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  this.page = await context.newPage();
});
