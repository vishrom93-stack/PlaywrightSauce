import { urls } from "../data/Urls.js";
import { expect } from "@playwright/test";

export class CheckoutCompletePage {
  titleLocator = '[data-test="title"]';
  thankYouHeader = ".complete-header";
  thankYouText = ".complete-text";
  titleText = "Checkout: Complete!";
  greeting = "Thank you for your order!";

  constructor(page) {
    this.page = page;
  }

  async expectCheckoutComplete() {
    await expect(this.page).toHaveURL(urls.completeUrl);
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      this.titleText
    );

    await this.openCheckoutCompletePage();
    await expect(this.page.locator(this.thankYouHeader)).toBeVisible();
    await expect(this.page.locator(this.thankYouHeader)).toHaveText(
      this.greeting
    );
  }

  async openCheckoutCompletePage() {
    await this.page.goto(urls.completeUrl);
  }
}
