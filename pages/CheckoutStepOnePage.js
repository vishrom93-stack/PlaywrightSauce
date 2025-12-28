import { expect } from "@playwright/test";
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


  async  checkOutStepOne(first, last, postal) {
   await this.openCheckoutStepOnePage();
    await expect(this.page).toHaveURL(urls.step1Url);
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      this.titleText
    );
  
    await this.fillStepOneForm(first, last, postal);
    await this.clickContinue();
  }
  
}
