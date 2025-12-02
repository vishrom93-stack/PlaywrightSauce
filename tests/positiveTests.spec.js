import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js"; // 📝 Page Object for the login page
import { AcceptedSauce } from "../data/AcceptedSauce.js"; // 👥 Accepted users data class
import { expectPositiveLogin } from "../helpers/positiveAssertions.js"; // 🔍 Positive login validation helper

const acceptedSauce = new AcceptedSauce(); // 🧪 Create ONE instance of user data (static, no need each test)

test.describe("Positive Login Tests 🌟🔐", () => {
  // 🧼 Runs BEFORE EACH test — clean, fresh browser page
  test.beforeEach(async ({ page }) => {
    page.loginPage = new LoginPage(page); // 🏗 Create LoginPage object for THIS test run
    await page.loginPage.openLoginPage(); // 🚪 Open the login page before every test
  });

  // 🔁 Loop through all valid users (standard_user, problem_user, etc.)
  acceptedSauce.getUsers().forEach((user) => {
    test(`🙂🔓 Login test for user: ${user.username}`, async ({ page }) => {
      await page.loginPage.login(user.username, user.password); // ✏️ Enter username + password
      await expectPositiveLogin(page, page.loginPage); // 🎯 Validate successful login (inventory page url + title check)
    });
  });
});
