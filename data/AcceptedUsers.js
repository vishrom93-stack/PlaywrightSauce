export class AcceptedUsers {
  //🔑 private password
  #password = "secret_sauce";
  users = [
    { username: "standard_user", password: this.#password },
    { username: "problem_user", password: this.#password },
    { username: "performance_glitch_user", password: this.#password },
    { username: "error_user", password: this.#password },
    { username: "visual_user", password: this.#password },
  ];

  //🔑 geting password
  getPassword() {
    return this.#password;
  }
}
