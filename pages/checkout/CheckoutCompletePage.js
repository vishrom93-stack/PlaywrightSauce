import { AcceptedSauce } from "../../data/AcceptedSauce.js";

export class CheckoutCompletePage {
  // 🏷️ Locators for the complete checkout page
  titleLocator = '[data-test="title"]';
  thankYouHeader = ".complete-header";   // 🎉 Big "Thank you!" text
  thankYouText = ".complete-text";       // 📝 Secondary order confirmation text

  constructor(page) {
    this.page = page;

    // 📄 Expected title text from DOM
    this.titleText = "Checkout: Complete!";

    // 🎉 Expected greeting text shown on successful order
    this.greeting = "Thank you for your order!";
  }

  // 🎯 Navigate to the final "Order Complete" page
  async openCheckoutCompletePage() {
    const acceptedSauce = new AcceptedSauce();

    // 🌍 Go to complete URL
    await this.page.goto(acceptedSauce.completeUrl);

    // ⏳ WAIT ONLY — ensures page is loaded before interaction
    await this.page.locator(this.thankYouHeader).waitFor();
    await this.page.locator(this.thankYouText).waitFor();
  }
}
