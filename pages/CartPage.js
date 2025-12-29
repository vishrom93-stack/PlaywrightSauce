import {expect} from '@playwright/test'
import {URLS} from '../data/urls.js'

export class CartPage {
  checkoutButton = '[data-test="checkout"]'
  titleLocator = '[data-test="title"]'
  cartBadge = '.shopping_cart_badge'

  constructor(page) {
    this.page = page
  }
  async openCartPage() {
    this.page.goto(URLS.cartUrl)
  }
  async clickCheckout() {
    await this.page.locator(this.checkoutButton).click()
  }

  async goToCartPage() {
    await this.openCartPage()
    await expect(this.page).toHaveURL(URLS.cartUrl)
    await expect(this.page.locator(this.titleLocator)).toHaveText('Your Cart')
  }
}
