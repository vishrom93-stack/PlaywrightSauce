import { RejectedUsers } from "../data/RejectedUsers.js";

export class RejectedAttempts {
  constructor() {
    this.rejectedUsers = new RejectedUsers();
  }

  WrongLoginStatus(username, password) {
    // 🔐 Locked-out user
    if (
      username === this.rejectedUsers.lockedOutUser.username &&
      password === this.rejectedUsers.lockedOutUser.password
    ) {
      return this.rejectedUsers.LockedOutUser();
    }

    // ❌ Empty username
    if (!username) {
      return this.rejectedUsers.EmptyUsername();
    }

    // ❌ Empty password
    if (!password) {
      return this.rejectedUsers.EmptyPassword();
    }

    // ❌ Wrong credentials
    return this.rejectedUsers.WrongUser();
  }
}
