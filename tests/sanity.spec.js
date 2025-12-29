import {test} from '@playwright/test'

import {CHECKOUT_USER, VALID_USERS} from '../data/users.js'
import {CartPage} from '../pages/CartPage.js'
import {CheckoutCompletePage} from '../pages/CheckoutCompletePage.js'
import {CheckoutStepOnePage} from '../pages/CheckoutStepOnePage.js'
import {CheckoutStepTwoPage} from '../pages/CheckoutStepTwoPage.js'
import {InventoryPage} from '../pages/InventoryPage.js'
import {LoginPage} from '../pages/LoginPage.js'

const productsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']

test.describe('Sanity Login Test', () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.openLoginPage()
  })

  test('Complete Checkout', async ({page}) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const stepOnePage = new CheckoutStepOnePage(page)
    const stepTwoPage = new CheckoutStepTwoPage(page)
    const completePage = new CheckoutCompletePage(page)

    await loginPage.login(
      VALID_USERS.standardUser.username,
      VALID_USERS.standardUser.password,
    )
    await inventoryPage.assertSuccessfulLogin()
    for (const product of productsToAdd) {
      await inventoryPage.addToCart(product)
    }
    await inventoryPage.expectCartBadgeCount(productsToAdd.length)
    await cartPage.goToCartPage()
    await cartPage.clickCheckout()
    await stepOnePage.checkOutStepOne(
      CHECKOUT_USER.firstName,
      CHECKOUT_USER.lastName,
      CHECKOUT_USER.postalCode,
    )
    await stepOnePage.clickContinue()
    await stepTwoPage.checkOutStepTwo()
    await completePage.expectCheckoutComplete()
  })
})
