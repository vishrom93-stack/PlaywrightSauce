import { urls } from "../data/Urls.js";
export class InventoryPage {
  // 🏷️ Locators for inventory elements
  inventoryItem = ".inventory_item";
  inventoryItemName = ".inventory_item_name";
  addToCartButton = '[data-test^="add-to-cart"]';
  cartBadge = ".shopping_cart_badge";
  titleLocator = '[data-test="title"]';
  titleText = "Products";

  constructor(page) {
    this.page = page;
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
}
