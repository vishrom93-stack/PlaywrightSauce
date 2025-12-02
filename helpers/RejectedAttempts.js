import {AcceptedSauce} from "../data/AcceptedSauce.js";
import { RejectedSauce } from "../data/RejectedSauce.js";


export class RejectedAttempts {
  constructor() {
    this.acceptedSauce= new AcceptedSauce();
    this.rejectedSauce= new RejectedSauce();
  }

WrongLoginStatus(username, password) {
    // 🔐 Locked-out user
    if (
      username === this.rejectedSauce.lockedOutUser.username &&
      password === this.rejectedSauce.lockedOutUser.password
    ) {
      return this.rejectedSauce.LockedOutUser();
    }

    // ❌ Empty username
    if (!username) {
      return this.rejectedSauce.EmptyUsername();
    }

    // ❌ Empty password
    if (!password) {
      return this.rejectedSauce.EmptyPassword();
    }

    // ❌ Wrong credentials
    return this.rejectedSauce.WrongUser();
  }

}

