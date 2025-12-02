import { RejectedSauce } from "../data/RejectedSauce.js";
import { AcceptedSauce } from "../data/AcceptedSauce.js";

export class CombinedRejectedSauce {
  constructor() {
    const rejected = new RejectedSauce();
    const accepted = new AcceptedSauce();

    // 🔐 Locked-out user
    this.lockedOutUser = rejected.lockedOutUser;

    // 🟩 Accepted users (valid usernames, but will be used for negative tests)
    this.acceptedUsers = accepted.getUsers();

    // ❌ Wrong password
    this.wrongPassword = "wrong_password";

    // ❌ Empty username case
    this.emptyUsername = "";

    // ❌ Empty password case
    this.emptyPassword = "";

    // ------------------------------------
    // ⭐ Build username array
    // ------------------------------------
    this.arrayOfRejectedUsernames = [
      this.lockedOutUser.username, // "locked_out_user"
      this.emptyUsername, // ""
    ];

    // Add all accepted usernames (for wrong-password tests)
    this.acceptedUsers.forEach((user) => {
      this.arrayOfRejectedUsernames.push(user.username);
    });

    // Add fully wrong username
    this.arrayOfRejectedUsernames.push("wrong_sauce_user");

    // ------------------------------------
    // ⭐ Build password array
    // ------------------------------------
    this.arrayOfRejectedPasswords = [
      this.emptyPassword, // ""
      this.wrongPassword, // "wrong_password"
    ];
  }
}
