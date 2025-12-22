import { AcceptedUsers } from "../data/AcceptedUsers.js";
export class InventoryPage {
  // 🏷️ Locators for inventory elements
  inventoryItem = ".inventory_item";
  inventoryItemName = ".inventory_item_name";
  inventoryButton = ".btn_inventory";
  cartBadge = ".shopping_cart_badge";

  constructor(page) {
    this.page = page;
    this.titleLocator = '[data-test="title"]';
    this.titleText = "Products";
  }


  async openInventoryPage() {
    await this.page.goto(AcceptedUsers().urls.inventoryUrl);
  }


  async addToCart(productName) {
    const item = this.page.locator(
      `${this.inventoryItem}:has(${this.inventoryItemName}:has-text("${productName}"))`
    );

    await item.locator(this.inventoryButton).click();
  }
}
