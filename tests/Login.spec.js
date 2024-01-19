const { test, expect } = require("@playwright/test");

test("Can login", async ({ page }) => {
  //Go to login page
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  //Enter credentials
  await page.locator("#username").fill("student");
  await page.locator("#password").fill("Password123");

  //Click login
  await page.locator("#submit").click();

  //Assert logged in
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/"
  );
  await expect(page.locator(".post-title")).toHaveText(
    "Logged In Successfully"
  );
});
