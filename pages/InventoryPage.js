import { urls } from "../data/Urls.js";
import { expect } from "@playwright/test";

export class InventoryPage {
  // 🔹 Locators
  cartBadge = ".shopping_cart_badge";
  titleLocator = '[data-test="title"]';
  titleText = "Products";

  constructor(page) {
    this.page = page;
  }

  // ✅ Positive login assertion
  async expectPositiveLogin() {
    await expect(this.page).toHaveURL(urls.inventoryUrl);
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      this.titleText
    );
  }

  // 🌐 Open inventory page
  async openInventoryPage() {
    await this.page.goto(urls.inventoryUrl);
  }

  // 🔄 Convert product name → SauceDemo ID format
  productNameToId(productName) {
    // "Sauce Labs Backpack" → "sauce-labs-backpack"
    return productName.toLowerCase().replace(/ /g, "-"); // / /g- Find every space in the text & Replace spaces with hyphens (-)
  }

  // 🛒 Add product to cart (ID-based, universal)
  async addToCart(productName) {
    const productId = this.productNameToId(productName);
    await this.page.locator(`[id="add-to-cart-${productId}"]`).click();
  }

  // 🔢 Cart badge count assertion
  async expectCartBadgeCount(count) {
    await expect(this.page.locator(this.cartBadge)).toBeVisible();
    await expect(this.page.locator(this.cartBadge)).toHaveText(
      count.toString()
    );
  }
}
