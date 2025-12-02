import { AcceptedSauce } from "../../data/AcceptedSauce.js";

export class CheckoutStepOnePage {
  // 🏷️ Locators for Step One fields
  titleLocator = '[data-test="title"]';
  firstName = '[data-test="firstName"]';
  lastName = '[data-test="lastName"]';
  postalCode = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';

  constructor(page) {
    this.page = page;

    // 📄 Expected title for this page
    this.titleText = "Checkout: Your Information";
  }

  // 🧭 Open Checkout: Step One page
  // Used ONLY when navigating directly (not during flow)
  async openCheckoutStepOnePage() {
    await this.page.goto(new AcceptedSauce().step1Url);

    // ⏳ WAIT ONLY — no expect inside POM classes
    // (expect belongs in test files or Positive helpers)
    await this.page.locator(this.titleLocator).waitFor();
    await this.page.locator(this.firstName).waitFor();
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
