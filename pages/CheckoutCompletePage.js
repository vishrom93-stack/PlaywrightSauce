import { urls } from "../data/Urls.js";

export class CheckoutCompletePage {
  // 🏷️ Locators for the complete checkout page
  titleLocator = '[data-test="title"]';
  thankYouHeader = ".complete-header"; // 🎉 Big "Thank you!" text
  thankYouText = ".complete-text"; // 📝 Secondary order confirmation text
  titleText = "Checkout: Complete!";
  greeting = "Thank you for your order!";

  constructor(page) {
    this.page = page;
  }
  async openCheckoutCompletePage() {
    await this.page.goto(urls.completeUrl);
  }
}
