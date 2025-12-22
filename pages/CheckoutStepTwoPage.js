import { urls } from "../data/Urls.js";
export class CheckoutStepTwoPage {
  // 🏷️ Locators for Step Two review page
  titleLocator = '[data-test="title"]';
  finishButton = '[data-test="finish"]';

  constructor(page) {
    this.page = page;
    this.titleText = "Checkout: Overview";
  }

  async openCheckoutStepTwoPage() {
    await this.page.goto(urls.step2Url);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }
}
