import {expect} from '@playwright/test'
import {URLS} from '../data/urls'

export class InventoryPage {
  cartBadge = '.shopping_cart_badge'
  titleLocator = '[data-test="title"]'
  addToCartById = (id) => `[id="add-to-cart-${id}"]`

  constructor(page) {
    this.page = page
  }

  async assertSuccessfulLogin() {
    await expect(this.page).toHaveURL(URLS.inventoryUrl)
    await expect(this.page.locator(this.titleLocator)).toHaveText('Products')
  }

  async openInventoryPage() {
    await this.page.goto(URLS.inventoryUrl)
  }

  productNameToId(productName) {
    return productName.toLowerCase().replace(/ /g, '-') // / /g- Find every space in the text & Replace spaces with hyphens (-)
  }

  async addToCart(productName) {
    const productId = this.productNameToId(productName)
    const selector = this.addToCartById(productId)
    await this.page.locator(selector).click()
  }

  async expectCartBadgeCount(count) {
    await expect(this.page.locator(this.cartBadge)).toBeVisible()
    await expect(this.page.locator(this.cartBadge)).toHaveText(count.toString())
  }
}
