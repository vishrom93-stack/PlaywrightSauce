import { urls } from "../data/Urls.js";

export class CheckoutCompletePage {
  // 🏷️ Locators for the complete checkout page
  titleLocator = '[data-test="title"]';
  thankYouHeader = ".complete-header"; // 🎉 Big "Thank you!" text
  thankYouText = ".complete-text"; // 📝 Secondary order confirmation text

  constructor(page) {
    this.page = page;
    this.titleText = "Checkout: Complete!";
    this.greeting = "Thank you for your order!";
  }
  async openCheckoutCompletePage() {
    await this.page.goto(urls.completeUrl);
  }
}
