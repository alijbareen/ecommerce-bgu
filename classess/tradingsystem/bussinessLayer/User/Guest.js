import aUser from "../../../Logic/User/aUser";
/**
 * Guest.
 *
 * @class Guest
 * @extends {aUser}
 */
class Guest extends aUser {
  say() {
    console.log("bark");
  }
}
