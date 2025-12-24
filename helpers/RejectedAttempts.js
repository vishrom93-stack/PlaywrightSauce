import * as rejectedUsers from "../data/RejectMessage.js";

export function WrongLoginStatus(username, password) {
  // 🔐 Locked-out user
  if (
    username === rejectedUsers.lockedOutUser.username &&
    password === rejectedUsers.lockedOutUser.password
  ) {
    return rejectedUsers.lockedOutUserMessage();
  }

  // ❌ Empty username
  if (!username) {
    return rejectedUsers.emptyUsernameMessage();
  }

  // ❌ Empty password
  if (!password) {
    return rejectedUsers.emptyPasswordMessage();
  }

  // ❌ Wrong credentials
  return rejectedUsers.wrongUserMessage();
}
