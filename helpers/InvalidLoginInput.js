import { RejectedUsers } from "../data/RejectedUsers.js";
import { AcceptedUsers } from "../data/AcceptedUsers.js";

export class InvalidLoginInput {
  wrongUser = "wrong_user";
  constructor() {
    const rejected = new RejectedUsers();
    const accepted = new AcceptedUsers();

    // 🔐 Locked-out user
    this.lockedOutUser = rejected.lockedOutUser;

    // 🟩 Accepted user (valid username, but will be used for negative tests)
    this.acceptedUser = accepted.users[0];

    // ❌ Empty username case
    this.emptyUsername = "";

    // ❌ Empty password case
    this.emptyPassword = "";

    // ------------------------------------
    // ⛔️ Build username array
    // ------------------------------------
    this.invalidUsernames = [
      this.acceptedUser.username,
      this.emptyUsername,
      this.wrongUser,
    ];
    
    // ------------------------------------
    // ⛔️ Build password array
    // ------------------------------------
    this.invalidPasswords = [
      this.acceptedUser.password,
      this.emptyPassword,
      this.wrongUser,
    ];
  }
}
