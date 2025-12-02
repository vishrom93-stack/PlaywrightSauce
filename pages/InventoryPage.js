import { AcceptedSauce } from "../data/AcceptedSauce";
export class InventoryPage {
  // 🏷️ Locators for inventory elements
  inventoryItem = ".inventory_item";
  inventoryItemName = ".inventory_item_name";
  inventoryButton = ".btn_inventory";
  cartBadge = ".shopping_cart_badge";

  constructor(page) {
    this.page = page;
  }

  // 🛒 Open Inventory Page

  async openInventoryPage() {
    await this.page.goto(AcceptedSauce().inventoryUrl);
  }

  // ➕ Add a product to cart by product name
  // 🔦 Finds the correct product using :has() and clicks its "Add to Cart" button
  async addToCart(productName) {
    // 🔍 Locate the item containing the product name
    const item = this.page.locator(
      `${this.inventoryItem}:has(${this.inventoryItemName}:has-text("${productName}"))`
    );

    // 🖱️ Click "Add to Cart" inside the matched item
    await item.locator(this.inventoryButton).click();
    // 🎯 Wait for cart badge → confirms item was added
    await this.page.locator(this.cartBadge).waitFor();
  }
}
