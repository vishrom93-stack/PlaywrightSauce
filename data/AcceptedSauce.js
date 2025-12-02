export class AcceptedSauce {

  //🔑 private password
  #password = "secret_sauce";  

  //🌐 URLS  
  inventoryUrl = "https://www.saucedemo.com/inventory.html";
  cartUrl = "https://www.saucedemo.com/cart.html";
  step1Url = "https://www.saucedemo.com/checkout-step-one.html";
  step2Url = "https://www.saucedemo.com/checkout-step-two.html";
  completeUrl = "https://www.saucedemo.com/checkout-complete.html";

  constructor() {
    this.users = [
      { username: "standard_user", password: this.#password },
      { username: "problem_user", password: this.#password },
      { username: "performance_glitch_user", password: this.#password },
      { username: "error_user", password: this.#password },
      { username: "visual_user", password: this.#password },
    ];
  }

  getUsers() {
    return this.users;
  }

  //🔑 geting password
  getPassword() { 
    return this.#password;
  }

  getTitle() {
    return "Products";
  }
}
