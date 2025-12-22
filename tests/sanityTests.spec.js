import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutStepOnePage } from "../pages/CheckoutStepOnePage.js";
import { CheckoutStepTwoPage } from "../pages/CheckoutStepTwoPage.js";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage.js";

import { AcceptedUsers } from "../data/AcceptedUsers.js";

import * as Positive from "../helpers/positiveAssertions.js";

const firstName = "Romi";
const lastName = "Tester";
const postalCode = "12345";

// 🛒 Products to add across ALL tests
const productsToAdd = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

const acceptedUsers = new AcceptedUsers();

test.describe("📝 Sanity Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
  });

  // -------- ⓺ six steps-pages test ⓺----------
  test("🔚🏁 End to end Test: From valid login to Checkout Complete 🛒🎬 ", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const stepOnePage = new CheckoutStepOnePage(page);
    const stepTwoPage = new CheckoutStepTwoPage(page);
    const completePage = new CheckoutCompletePage(page);

    const standardUser = acceptedUsers.users[0];

    await loginPage.login(standardUser.username, standardUser.password);
    await Positive.expectPositiveLogin(page, loginPage);

    await Positive.productsToAddInventory(page, inventoryPage, productsToAdd);
    await Positive.goToCartPage(page, cartPage);

    await Positive.checkOutStepOne(
      page,
      stepOnePage,
      firstName,
      lastName,
      postalCode
    );

    await Positive.checkOutStepTwo(page, stepTwoPage);

    await Positive.checkOutComplete(page, completePage);
  });
});
