import { expect } from "@playwright/test";
import { urls } from "../data/Urls.js";
export class CheckoutStepTwoPage {
  // 🏷️ Locators for Step Two review page
  titleLocator = '[data-test="title"]';
  finishButton = '[data-test="finish"]';
  titleText = "Checkout: Overview";

  constructor(page) {
    this.page = page;
  }

  async openCheckoutStepTwoPage() {
    await this.page.goto(urls.step2Url);
  }

  async finishCheckout() {
    await this.page.locator(this.finishButton).click();
  }

  async checkOutStepTwo() {
    await this.openCheckoutStepTwoPage();
    await expect(this.page).toHaveURL(urls.step2Url);
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      this.titleText
    );
    await this.finishCheckout();
  }
}
