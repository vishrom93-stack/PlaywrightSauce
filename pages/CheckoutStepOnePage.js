import { urls } from "../data/Urls.js";

export class CheckoutStepOnePage {
  // 🏷️ Locators for Step One fields
  titleLocator = '[data-test="title"]';
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';

  constructor(page) {
    this.page = page;

 
    this.titleText = "Checkout: Your Information";
  }
  async openCheckoutStepOnePage() {
    await this.page.goto(urls.step1Url);
  }

  // ✍️ Fill out the Step One form
  async fillStepOneForm(first, last, postal) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, postal);
  }

  // ➡️ Click the Continue button to move to Step Two
  async clickContinue() {
    await this.page.click(this.continueButton);
  }
}
