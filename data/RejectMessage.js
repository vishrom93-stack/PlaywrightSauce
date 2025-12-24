import { AcceptedUsers } from "./AcceptedUsers.js";

export const lockedOutUser = {
  username: "locked_out_user",
  password: new AcceptedUsers().getPassword(),
};
export const errorLocator = '[data-test="error"]';

//🔒 valid user which is locked and cannot login
export const lockedOutUserMessage = () => {
  return "Epic sadface: Sorry, this user has been locked out.";
};
//🫙 username field wasn't filled
export const emptyUsernameMessage = () => {
  return "Epic sadface: Username is required";
};
//🫙 password field wasn't filled
export const emptyPasswordMessage = () => {
  return "Epic sadface: Password is required";
};
// ❌ username doesn't match the password for any valid user in the system
export const wrongUserMessage = () => {
  return "Epic sadface: Username and password do not match any user in this service";
};
