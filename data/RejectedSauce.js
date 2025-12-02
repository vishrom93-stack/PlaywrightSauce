import { AcceptedSauce } from "./AcceptedSauce.js";


// The AcceptedSauce.js file feedback is the same as here
export class RejectedSauce {
  lockedOutUser = {
    username: "locked_out_user",
    password: new AcceptedSauce().getPassword(),
  };
  errorLocator = '[data-test="error"]';

  //🔒 valid user which is locked an cannot login
  LockedOutUser() {
    return "Epic sadface: Sorry, this user has been locked out.";
  }
  //🫙 username field wasn't filled
  EmptyUsername() {
    return "Epic sadface: Username is required";
  }
  //🫙 password field wasn't filled
  EmptyPassword() {
    return "Epic sadface: Password is required";
  }
  // ❌ username doesn't match the password for any valid user in the system
  WrongUser() {
    return "Epic sadface: Username and password do not match any user in this service";
  }
}
