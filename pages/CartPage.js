import { urls } from "../data/Urls.js";
export class CartPage {
  checkoutButton = '[data-test="checkout"]';
  titleLocator = '[data-test="title"]';
  titleText = "Your Cart";
  cartBadge = ".shopping_cart_badge";

  constructor(page) {
    this.page = page;
  }
  async openCartPage() {
    this.page.goto(urls.cartUrl); // 🌍 Go directly to cart page
  }
  async clickCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }
}
