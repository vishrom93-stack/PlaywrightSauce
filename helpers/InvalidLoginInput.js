import * as rejected from "../data/RejectMessage.js";
import { AcceptedUsers } from "../data/AcceptedUsers.js";

let wrongUser = "wrong_user";

// 🔐 Locked-out user
const lockedOutUser = rejected.lockedOutUser;

// 🟩 Accepted user (valid username, but will be used for negative tests)

const acceptedUser = new AcceptedUsers().users[0];

// ❌ Empty username case
const emptyUsername = "";

// ❌ Empty password case
const emptyPassword = "";

// ------------------------------------
// ⛔️ Build username array
// ------------------------------------
export const invalidUsernames = [acceptedUser.username, emptyUsername, wrongUser];

// ------------------------------------
// ⛔️ Build password array
// ------------------------------------
export const invalidPasswords = [acceptedUser.password, emptyPassword, wrongUser];
