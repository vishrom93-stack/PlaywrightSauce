// 📦 Re-export all checkout pages
export * from "./CheckoutStepOnePage.js";      
export * from "./CheckoutStepTwoPage.js";      
export * from "./CheckoutCompletePage.js";     




















































































































































































































































































































/*

// 📥 Import pages for Flow + Factory
import { CheckoutStepOnePage } from "./CheckoutStepOnePage.js";
import { CheckoutStepTwoPage } from "./CheckoutStepTwoPage.js";
import { CheckoutCompletePage } from "./CheckoutCompletePage.js";

*/




/*
// 🚀 Checkout Flow Aggregator
export class CheckoutFlow {
  constructor(page) {
    this.page = page;

    this.step1 = new CheckoutStepOnePage(page);
    this.step2 = new CheckoutStepTwoPage(page);
    this.complete = new CheckoutCompletePage(page);
  }

  makeStepOne() { return this.step1; }
  makeStepTwo() { return this.step2; }
  makeComplete() { return this.complete; }
}

// 🌟 Factory for dynamic creation
export function makeCheckout(stepName, page) {
  const constructorMap = {
    CheckoutStepOnePage,
    CheckoutStepTwoPage,
    CheckoutCompletePage,
  };

  const Constructor = constructorMap[stepName];

  if (!Constructor) {
    throw new Error(`❌ Unknown checkout step: "${stepName}"`);
  }

  return new Constructor(page);
}
*/