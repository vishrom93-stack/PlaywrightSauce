import {test} from '@playwright/test'
import {INVALID_USERS, LOCKED_OUT_USER, VALID_USERS} from '../data/users.js'
import {InventoryPage} from '../pages/InventoryPage.js'
import {LoginPage} from '../pages/LoginPage.js'

test.describe('Valid Login Tests', () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.openLoginPage()
    const inventoryPage = new InventoryPage(page)
    await inventoryPage.openInventoryPage()
  })

  test(`Standard login test with ${VALID_USERS.standardUser.username}`, async ({
    page,
  }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login(
      VALID_USERS.standardUser.username,
      VALID_USERS.standardUser.password,
    )
  })
  Object.values(VALID_USERS).forEach((user) => {
    test(`Login test for user: ${user.username}`, async ({page}) => {
      const loginPage = new LoginPage(page)
      const inventoryPage = new InventoryPage(page)
      await loginPage.login(user.username, user.password)
      await inventoryPage.assertSuccessfulLogin()
    })
  })
})

test.describe('Invalid Login Tests', () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.openLoginPage()
  })

  test('Validate Blocked User Login', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.login(LOCKED_OUT_USER.username, LOCKED_OUT_USER.password)
    loginPage.assertErrorMessage(LOCKED_OUT_USER.message)
  })

  Object.values(INVALID_USERS).forEach(({username, password, message}) => {
    const usernameDisplay = username === '' ? 'empty' : username
    const passwordDisplay = password === '' ? 'empty' : password
    test(`login with invalid credentials - username: ${usernameDisplay}, and password: ${passwordDisplay}`, async ({
      page,
    }) => {
      const loginPage = new LoginPage(page)
      await loginPage.login(username, password)
      await loginPage.assertErrorMessage(message)
    })
  })
})
