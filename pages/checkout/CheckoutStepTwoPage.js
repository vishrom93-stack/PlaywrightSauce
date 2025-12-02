import { AcceptedSauce } from "../../data/AcceptedSauce";
export class CheckoutStepTwoPage {
  // 🏷️ Locators for Step Two review page
  titleLocator = '[data-test="title"]';
  finishButton = '[data-test="finish"]';

  constructor(page) {
    this.page = page;

    // 📄 Expected page title from DOM
    this.titleText = "Checkout: Overview";
  }

  // 🧭 Open Checkout Step Two page
  async openCheckoutStepTwoPage() {
    await this.page.goto(new AcceptedSauce().step2Url);

    // ⏳ Wait for required elements on THIS page
    await this.page.locator(this.titleLocator).waitFor();
    await this.page.locator(this.finishButton).waitFor();

  }

  // ✔️ Click the Finish button to complete checkout
  async finishCheckout() {
    await this.page.click(this.finishButton);
  }
}
