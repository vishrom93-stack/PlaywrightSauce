// Basically this is expectable, but storing data like users and urls are prefered to be stored as javascript objects or arrays.

// Example:
/*
const VALID_PASSWORD = "secret_sauce";
const USERS = [
	{ username: "standard_user", password: VALID_PASSWORD },
	{ username: "problem_user", password: VALID_PASSWORD },
	{ username: "performance_glitch_user", password: VALID_PASSWORD },
	{ username: "error_user", password: VALID_PASSWORD },
	{ username: "visual_user", password: VALID_PASSWORD },
];

const BASIC_URL = "https://www.saucedemo.com/";
const URLS = {
	inventoryUrl: `${BASIC_URL}inventory.html`,
	cartUrl: `${BASIC_URL}cart.html`,
	step1Url: `${BASIC_URL}checkout-step-one.html`,
	step2Url: `${BASIC_URL}checkout-step-two.html`,
	completeUrl: `${BASIC_URL}checkout-complete.html`,
};
*/

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
