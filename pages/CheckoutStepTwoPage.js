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
}
