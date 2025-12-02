export class LoginPage {
  usernameField = '[data-test="username"]';
  userPasswordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  titleLocator = '[data-test="title"]';
  url = "https://www.saucedemo.com/";

  constructor(page) {
    this.page = page;
  }

  async openLoginPage() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    await this.page.locator(this.usernameField).fill(username);
    await this.page.locator(this.userPasswordField).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}
