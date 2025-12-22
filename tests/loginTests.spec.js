import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { AcceptedUsers } from "../data/AcceptedUsers.js";
import { RejectedUsers } from "../data/RejectedUsers.js";
import { InvalidLoginInput } from "../helpers/InvalidLoginInput.js";
import { RejectedAttempts } from "../helpers/RejectedAttempts.js";
import { expectPositiveLogin } from "../helpers/positiveAssertions.js";

const acceptedUsers = new AcceptedUsers();
const rejectedUsers = new RejectedUsers();
const invalidLoginInput = new InvalidLoginInput();

test.describe("🌟 Positive(Valid) Login Tests 🔐", () => {
  test.beforeEach(async ({ page }) => {
    page.loginPage = new LoginPage(page);
    await page.loginPage.openLoginPage();
  });
  let validUsers = acceptedUsers.users;
  const standardUser = validUsers.shift();
  test(`🔓😀 Standard login test with ${standardUser.username}`, async ({
    page,
  }) => {
    await page.loginPage.login(standardUser.username, standardUser.password);
    await expectPositiveLogin(page, page.loginPage);
  });
  validUsers.forEach((user) => {
    test(`🙂🔓 Login test for user: ${user.username}`, async ({ page }) => {
      await page.loginPage.login(user.username, user.password);
      await expectPositiveLogin(page, page.loginPage);
    });
  });
});

test.describe("🔏 Negative(Invalid) Login Tests 🚫", () => {
  const rejectedAttempts = new RejectedAttempts();

  test.beforeEach(async ({ page }) => {
    page.loginPage = new LoginPage(page);
    await page.loginPage.openLoginPage();
  });

  test("🔒☹️ Locked Out User", async ({ page }) => {
    const { username, password } = rejectedUsers.lockedOutUser;

    const expectedMessage = rejectedAttempts.WrongLoginStatus(
      username,
      password
    );

    await page.loginPage.login(username, password);

    await expect(page.locator(rejectedUsers.errorLocator)).toHaveText(
      expectedMessage
    );
  });

  // ⭐ FULL CROSS MATRIX: username × password
  invalidLoginInput.invalidUsernames.forEach((username, i) => {
    invalidLoginInput.invalidPasswords.forEach((password, j) => {
      if (i === 0 && j === 0) return;
      const usernameDisplay = username === "" ? '"" (empty)' : `${username}`;
      const passwordDisplay = password === "" ? '""(empty)' : `${password}`;
      test(`⛔️☹️ Rejected login: username= ${usernameDisplay} | password= ${passwordDisplay}`, async ({
        page,
      }) => {
        await page.loginPage.login(username, password);

        const expectedMessage = rejectedAttempts.WrongLoginStatus(
          username,
          password
        );

        await expect(page.locator(rejectedUsers.errorLocator)).toHaveText(
          expectedMessage
        );
      });
    });
  });
});
