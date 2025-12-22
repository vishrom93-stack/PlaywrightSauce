import { urls } from "../data/Urls.js";
export class CartPage {
  // 🏷️ button locator
  checkoutButton = '[data-test="checkout"]';

  constructor(page) {
    this.page = page;
    this.titleLocator = '[data-test="title"]';
    this.titleText = "Your Cart";
    this.cartBadge = ".shopping_cart_badge";
  }  
  async openCartPage() {
    this.page.goto(urls.cartUrl); // 🌍 Go directly to cart page
  }
  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
