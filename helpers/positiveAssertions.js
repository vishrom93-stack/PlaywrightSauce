import { expect } from "@playwright/test";
import { AcceptedSauce } from "../data/AcceptedSauce.js";

const acceptedSauce = new AcceptedSauce();

// 1️⃣ Positive Login
export async function expectPositiveLogin(page, loginPage) {
  await expect(page).toHaveURL(acceptedSauce.inventoryUrl);
  await expect(page.locator(loginPage.titleLocator)).toHaveText(
    acceptedSauce.getTitle()
  );
}

// 2️⃣ Add Products to Inventory
export async function productsToAddInventory(page, inventoryPage, products) {
  for (const product of products) {
    await inventoryPage.addToCart(product);
  }

  const badge = page.locator(inventoryPage.cartBadge);
  await expect(badge).toBeVisible();
  await expect(badge).toHaveText(String(products.length));
}

// 3️⃣ Navigate to Cart Page
export async function goToCartPage(page, cartPage) {
  await cartPage.openCartPage();
  await expect(page).toHaveURL(acceptedSauce.cartUrl);
  await expect(page.locator(cartPage.titleLocator)).toHaveText(
    cartPage.titleText
  );

  await cartPage.clickCheckout();
}

// 4️⃣ Step One Form
export async function checkOutStepOne(page, stepOnePage, first, last, postal) {
  await stepOnePage.openCheckoutStepOnePage();
  await expect(page).toHaveURL(acceptedSauce.step1Url);
  await expect(page.locator(stepOnePage.titleLocator)).toHaveText(
    stepOnePage.titleText
  );

  await stepOnePage.fillStepOneForm(first, last, postal);
  await stepOnePage.clickContinue();
}

// 5️⃣ Step Two
export async function checkOutStepTwo(page, stepTwoPage) {
  await expect(page).toHaveURL(acceptedSauce.step2Url);
  await expect(page.locator(stepTwoPage.titleLocator)).toHaveText(
    stepTwoPage.titleText
  );

  await stepTwoPage.finishCheckout();
}

// 6️⃣ Complete Page
export async function checkOutComplete(page, completePage) {
  await expect(page).toHaveURL(acceptedSauce.completeUrl);

  await expect(page.locator(completePage.titleLocator)).toHaveText(
    completePage.titleText
  );
  await expect(page.locator(completePage.thankYouText)).toBeVisible();

  await expect(page.locator(completePage.thankYouHeader)).toHaveText(
    completePage.greeting
  );
}
