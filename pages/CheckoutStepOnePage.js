import { urls } from "../data/Urls.js";

export class CheckoutStepOnePage {
  // 🏷️ Locators for Step One fields
  titleLocator = '[data-test="title"]';
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  titleText = "Checkout: Your Information";

  constructor(page) {
    this.page = page;
  }
  async openCheckoutStepOnePage() {
    await this.page.goto(urls.step1Url);
  }

  // ✍️ Fill out the Step One form
  async fillStepOneForm(first, last, postal) {
    await this.page.locator(this.firstName).fill(first);
    await this.page.locator(this.lastName).fill(last);
    await this.page.locator(this.postalCode).fill(postal);
  }

  // ➡️ Click the Continue button to move to Step Two
  async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }
}
