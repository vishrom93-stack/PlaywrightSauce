import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutStepOnePage } from "../pages/CheckoutStepOnePage.js";
import { CheckoutStepTwoPage } from "../pages/CheckoutStepTwoPage.js";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage.js";

import { AcceptedUsers } from "../data/AcceptedUsers.js";

// 🧍 Test Data
const firstName = "Romi";
const lastName = "Tester";
const postalCode = "12345";

// 🛒 Products
const productsToAdd = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

const acceptedUsers = new AcceptedUsers();

test.describe("📝 Sanity Login Tests", () => {
test.beforeEach(async ({ page }) => {
const loginPage = new LoginPage(page);
await loginPage.openLoginPage();
});

test("🔚🏁 End-to-End: Login → Checkout Complete 🛒", async ({ page }) => {
// 🧱 Page Objects
const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const cartPage = new CartPage(page);
const stepOnePage = new CheckoutStepOnePage(page);
const stepTwoPage = new CheckoutStepTwoPage(page);
const completePage = new CheckoutCompletePage(page);


const standardUser = acceptedUsers.users[0];

// 🔐 Login
await loginPage.login(
  standardUser.username,
  standardUser.password
);

// ✅ Inventory page validation
await inventoryPage.expectPositiveLogin();

// 🛒 Add products
//await inventoryPage.productsToAddInventory(productsToAdd)
for (const product of productsToAdd) {
  await inventoryPage.addToCart(product);
}


// 🛍️ Cart
await cartPage.openCartPage();
await cartPage.clickCheckout();

// 📝 Checkout
await stepOnePage.fillStepOneForm(
  firstName,
  lastName,
  postalCode
);
await stepOnePage.clickContinue();

await stepTwoPage.finishCheckout();

// 🎉 Complete
await completePage.expectCheckoutComplete();


});
});