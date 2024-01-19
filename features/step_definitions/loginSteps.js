const { Given, When, Then, And } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("the user is in the login page", async function () {
  await this.page.goto(
    "https://practicetestautomation.com/practice-test-login/"
  );
});

When(
  "the user enters valid username {string} and password {string} and clicks submit",
  async function (username, password) {
    await this.page.locator("#username").fill(username);
    await this.page.locator("#password").fill(password);

    await this.page.locator("#submit").click();
  }
);

Then("the user is logged in", async function () {
  await expect(this.page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/"
  );
  await expect(this.page.locator(".post-title")).toHaveText(
    "Logged In Successfully"
  );
});
