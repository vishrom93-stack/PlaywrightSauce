import { test } from "@playwright/test";
import { NewSauce } from "../data/NewSauce.js";
import * as Positive from "../helpers/positiveAssertions.js";

// 🧍 Test Data
const firstName = "Romi";
const lastName = "Tester";
const postalCode = "12345";

// 🛒 Products to add across ALL tests
const productsToAdd = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

test.describe(" 📝 Sanity Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    // 🧪 Create NewSauce instance for THIS test
    page.newSauce = new NewSauce(page);

    // 🗒️ Always start at login page
    await page.newSauce.getLoginPage().openLoginPage();
  });

  // -------- 🖲️ INVENTORY TEST ----------
  test(" 🖲️ Inventory", async ({ page }) => {
    const standardUser = page.newSauce.getAcceptedSauce().users[0];

    await page.newSauce
      .getLoginPage()
      .login(standardUser.username, standardUser.password);

    await Positive.expectPositiveLogin(page, page.newSauce.getLoginPage());

    await Positive.productsToAddInventory(
      page,
      page.newSauce.getInventoryPage(),
      productsToAdd
    );
  });

  // -------- 🛒 CART PAGE TEST ----------
  test(" 🛒 Go to Cart Page", async ({ page }) => {
    const standardUser = page.newSauce.getAcceptedSauce().users[0];

    await page.newSauce
      .getLoginPage()
      .login(standardUser.username, standardUser.password);

    await Positive.expectPositiveLogin(page, page.newSauce.getLoginPage());

    await Positive.productsToAddInventory(
      page,
      page.newSauce.getInventoryPage(),
      productsToAdd
    );

    await Positive.goToCartPage(page, page.newSauce.getCartPage());
  });

  // -------- 1️⃣ CHECKOUT STEP ONE ----------
  test(" 1️⃣ Checkout Step One", async ({ page }) => {
    const standardUser = page.newSauce.getAcceptedSauce().users[0];

    await page.newSauce
      .getLoginPage()
      .login(standardUser.username, standardUser.password);

    await Positive.expectPositiveLogin(page, page.newSauce.getLoginPage());

    await Positive.productsToAddInventory(
      page,
      page.newSauce.getInventoryPage(),
      productsToAdd
    );

    await Positive.goToCartPage(page, page.newSauce.getCartPage());

    await Positive.checkOutStepOne(
      page,
      page.newSauce.getStepOnePage(),
      firstName,
      lastName,
      postalCode
    );
  });

  // -------- 2️⃣ CHECKOUT STEP TWO ----------
  test(" 2️⃣ Checkout Step Two", async ({ page }) => {
    const standardUser = page.newSauce.getAcceptedSauce().users[0];

    await page.newSauce
      .getLoginPage()
      .login(standardUser.username, standardUser.password);

    await Positive.expectPositiveLogin(page, page.newSauce.getLoginPage());

    await Positive.productsToAddInventory(
      page,
      page.newSauce.getInventoryPage(),
      productsToAdd
    );

    await Positive.goToCartPage(page, page.newSauce.getCartPage());

    await Positive.checkOutStepOne(
      page,
      page.newSauce.getStepOnePage(),
      firstName,
      lastName,
      postalCode
    );

    await Positive.checkOutStepTwo(page, page.newSauce.getStepTwoPage());
  });

  // -------- 🏁 CHECKOUT COMPLETE ----------
  test(" 🏁 Checkout Complete", async ({ page }) => {
    const standardUser = page.newSauce.getAcceptedSauce().users[0];

    await page.newSauce
      .getLoginPage()
      .login(standardUser.username, standardUser.password);

    await Positive.expectPositiveLogin(page, page.newSauce.getLoginPage());

    await Positive.productsToAddInventory(
      page,
      page.newSauce.getInventoryPage(),
      productsToAdd
    );

    await Positive.goToCartPage(page, page.newSauce.getCartPage());

    await Positive.checkOutStepOne(
      page,
      page.newSauce.getStepOnePage(),
      firstName,
      lastName,
      postalCode
    );

    await Positive.checkOutStepTwo(page, page.newSauce.getStepTwoPage());

    await Positive.checkOutComplete(page, page.newSauce.getCompletePage());
  });
});
