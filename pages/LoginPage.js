import {expect} from '@playwright/test'
import {URLS} from '../data/urls.js'

export class LoginPage {
  usernameField = '[data-test="username"]'
  userPasswordField = '[data-test="password"]'
  loginButton = '[data-test="login-button"]'
  titleLocator = '[data-test="title"]'
  errorLocator = '[data-test="error"]'

  constructor(page) {
    this.page = page
  }

  async openLoginPage() {
    await this.page.goto(URLS.loginUrl)
  }

  async login(username, password) {
    await this.page.locator(this.usernameField).fill(username)
    await this.page.locator(this.userPasswordField).fill(password)
    await this.page.locator(this.loginButton).click()
  }

  async assertErrorMessage(message) {
    await expect(this.page.locator(this.errorLocator)).toHaveText(message)
  }
}
