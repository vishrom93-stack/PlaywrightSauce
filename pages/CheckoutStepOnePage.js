import {expect} from '@playwright/test'
import {URLS} from '../data/urls.js'

export class CheckoutStepOnePage {
  titleLocator = '[data-test="title"]'
  firstName = '[data-test="firstName"]'
  lastName = '[data-test="lastName"]'
  postalCode = '[data-test="postalCode"]'
  continueButton = '[data-test="continue"]'

  constructor(page) {
    this.page = page
  }
  async openCheckoutStepOnePage() {
    await this.page.goto(URLS.step1Url)
  }

  async fillStepOneForm(first, last, postal) {
    await this.page.locator(this.firstName).fill(first)
    await this.page.locator(this.lastName).fill(last)
    await this.page.locator(this.postalCode).fill(postal)
  }

  async clickContinue() {
    await this.page.locator(this.continueButton).click()
  }

  async checkOutStepOne(first, last, postal) {
    await this.openCheckoutStepOnePage()
    await expect(this.page).toHaveURL(URLS.step1Url)
    await expect(this.page.locator(this.titleLocator)).toHaveText(
      'Checkout: Your Information',
    )
    await this.fillStepOneForm(first, last, postal)
  }
}
