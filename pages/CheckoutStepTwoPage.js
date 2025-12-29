import {expect} from '@playwright/test'
import {URLS} from '../data/urls.js'

export class CheckoutStepTwoPage {
  titleLocator = '[data-test="title"]'
  finishButton = '[data-test="finish"]'

  constructor(page) {
    this.page = page
  }

  async openCheckoutStepTwoPage() {
    await this.page.goto(URLS.step2Url)
  }

  async finishCheckout() {
    await this.page.locator(this.finishButton).click()
  }

  async checkOutStepTwo() {
    await this.openCheckoutStepTwoPage()
    await expect(this.page).toHaveURL(URLS.step2Url)
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      'Checkout: Overview',
    )
    await this.finishCheckout()
  }
}
