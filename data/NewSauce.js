import * as Checkout from "../pages/checkout/index.js";
import { AcceptedSauce } from "../data/AcceptedSauce.js";
import { RejectedSauce } from "../data/RejectedSauce.js";
import { CombinedRejectedSauce } from "../helpers/RejectedCombine.js";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import { CartPage } from "../pages/CartPage.js";
import { RejectedAttempts } from "../helpers/RejectedAttempts.js";  

// ------------------------------------

export class NewSauce {
  constructor(page) {
    // 🧪 User data
    this.accepted = new AcceptedSauce();
    this.rejected = new RejectedSauce();
    this.combined = new CombinedRejectedSauce();
    this.rejectedAttempts=new RejectedAttempts();

    // 🧭 Page instances (ready to use)
    this.login = new LoginPage(page);
    this.inventory = new InventoryPage(page);
    this.cart = new CartPage(page);

    // 📦 Checkout pages
    this.checkout = {
      step1: new Checkout.CheckoutStepOnePage(page),
      step2: new Checkout.CheckoutStepTwoPage(page),
      complete: new Checkout.CheckoutCompletePage(page),
    };
  }

  getAcceptedSauce() {
    return this.accepted;
  }
  getRejectedSauce() {
    return this.rejected;
  }
  getCombinedRejectedSauce() {
    return this.combined;
  }
  getRejectedAttempts(){
    return this.rejectedAttempts;
  }
  getLoginPage() {
    return this.login;
  }
  getInventoryPage() {
    return this.inventory;
  }
  getCartPage() {
    return this.cart;
  }
  getStepOnePage() {
    return this.checkout.step1;
  }
  getStepTwoPage() {
    return this.checkout.step2;
  }
  getCompletePage() {
    return this.checkout.complete;
  }
}
