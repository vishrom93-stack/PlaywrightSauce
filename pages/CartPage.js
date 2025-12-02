import { AcceptedSauce } from "../data/AcceptedSauce.js";
export class CartPage {
  // 🏷️ button locator
  checkoutButton = '[data-test="checkout"]';

  constructor(page) {
    this.page = page;
    this.titleLocator = '[data-test="title"]';
    this.titleText = "Your Cart";
    this.cartBadge = ".shopping_cart_badge";
  }

  // 🛒 Open Cart Page
  async openCartPage() {
  this.page.goto(new AcceptedSauce().cartUrl); // 🌍 Go directly to cart page

    // ⏳ Wait for page to fully load:
    await this.page.locator(this.titleLocator).waitFor();
    await this.page.locator(this.checkoutButton).waitFor(); // - Checkout button
    await this.page.locator(this.cartBadge).waitFor(); // - Cart badge (item count)
  }

  // ➡️ Click the checkout button to move to Checkout Step One
  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
