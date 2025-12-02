// ===================================================================
// 🌶️ NEGATIVE LOGIN DATA SETUP — Shared for ALL tests
// ===================================================================
import { test, expect } from "@playwright/test";
import { NewSauce } from "../data/NewSauce.js";

const dataSauce = new NewSauce(); // 🎒 Master data hub
const combined = dataSauce.getCombinedRejectedSauce(); // 🔗 Combined invalid sets

const arrayOfUsernames = combined.arrayOfRejectedUsernames; // 🧪 All test usernames
const arrayOfPasswords = combined.arrayOfRejectedPasswords; // 🔐 All test passwords

const lockedOutUser = dataSauce.getRejectedSauce().lockedOutUser; // 🚫 Locked-out case
const rejectedAttempts = dataSauce.getRejectedAttempts(); // 🧠 Error logic engine
const rejectedSauce = dataSauce.getRejectedSauce(); // ⚠️ Error locators + rules

test.describe("🔏 Negative Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    page.newSauce = new NewSauce(page); // Creates NewSauce WITH PAGE for browser actions 🧪
    await page.newSauce.getLoginPage().openLoginPage(); // Opens login page 📃
  });
  // 🔒 Special locked-out user case
  test("🔒 Locked Out User", async ({ page }) => {
    const expectedMessage = rejectedAttempts.WrongLoginStatus(
      lockedOutUser.username,
      lockedOutUser.password
    );
    // Use LoginPage from NewSauce 🧪
    await page.newSauce
      .getLoginPage()
      .login(lockedOutUser.username, lockedOutUser.password);
    // Assertion ⚖️
    await expect(page.locator(rejectedSauce.errorLocator)).toHaveText(
      expectedMessage
    );
  });
  // ⭐ FULL CROSS MATRIX: username × password
  arrayOfUsernames.forEach((username) => {
    arrayOfPasswords.forEach((password) => {
      const usernameDisplay = username === "" ? '"" (empty)' : `"${username}"`;
      const passwordDisplay = password === "" ? '"" (empty)' : `"${password}"`;
      test(`☹️ Negative login: username=${usernameDisplay} | password=${passwordDisplay}`, async ({
        page,
      }) => {
        await page.newSauce.getLoginPage().login(username, password);

        const expectedError = rejectedAttempts.WrongLoginStatus(
          username,
          password
        );
        // Assertion ⚖️
        await expect(page.locator(rejectedSauce.errorLocator)).toHaveText(
          expectedError
        );
      });
    });
  });
});
