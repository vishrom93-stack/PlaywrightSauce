import {expect} from '@playwright/test'
import {URLS} from '../data/urls.js'

export class CheckoutCompletePage {
  titleLocator = '[data-test="title"]'
  thankYouHeader = '.complete-header'
  thankYouText = '.complete-text'

  constructor(page) {
    this.page = page
  }

  async expectCheckoutComplete() {
    await this.openCheckoutCompletePage()
    await expect(this.page).toHaveURL(URLS.completeUrl)
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      'Checkout: Complete!',
    )
    await expect(this.page.locator(this.thankYouHeader)).toBeVisible()
    await expect(this.page.locator(this.thankYouHeader)).toHaveText(
      'Thank you for your order!',
    )
  }

  async openCheckoutCompletePage() {
    await this.page.goto(URLS.completeUrl)
  }
}
