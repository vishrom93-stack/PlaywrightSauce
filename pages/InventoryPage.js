import { urls } from "../data/Urls.js";
import { expect } from "@playwright/test";

export class InventoryPage {
  inventoryItem = ".inventory_item";
  inventoryItemName = ".inventory_item_name";
  addToCartButton = '[data-test^="add-to-cart"]';
  cartBadge = ".shopping_cart_badge";
  titleLocator = '[data-test="title"]';
  titleText = "Products";

  constructor(page) {
    this.page = page;
  }

  async expectPositiveLogin() {
    await expect(this.page).toHaveURL(urls.inventoryUrl);
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      this.titleText
    );
  }
  async openInventoryPage() {
    await this.page.goto(urls.inventoryUrl);
  }

  async addToCart(productName) {
    await this.page
      .locator(
        `${this.inventoryItem}:has(${this.inventoryItemName}:has-text("${productName}"))`
      )
      .locator(this.addToCartButton)
      .click();
  }

  async productsToAddInventory(products) {
    for (const product of products) {
      await this.addToCart(product);
    }
  }
}