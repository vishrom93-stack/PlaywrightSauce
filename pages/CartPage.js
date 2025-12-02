export class CartPage {
  // 🏷️ Locators and URLs
  checkoutButton = '[data-test="checkout"]';
  urlCart = "https://www.saucedemo.com/cart.html";

  constructor(page) {
    this.page = page;

    this.titleLocator = '[data-test="title"]';
    this.titleText = "Your Cart";
    this.cartBadge = ".shopping_cart_badge";
  }

  // 🛒 Open Cart Page
  // Navigates to the cart page and ensures all required elements are loaded
  async openCartPage() {
    // 🌍 Go directly to cart page
    await this.page.goto(this.urlCart);

    // ⏳ Wait for page to fully load:
    // - Page title ("Your Cart")
    // - Checkout button
    // - Cart badge (item count)
    await this.page.locator(this.titleLocator).waitFor();
    await this.page.locator(this.checkoutButton).waitFor();
    await this.page.locator(this.cartBadge).waitFor();
  }

  // ➡️ Click the checkout button to move to Checkout Step One
  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
