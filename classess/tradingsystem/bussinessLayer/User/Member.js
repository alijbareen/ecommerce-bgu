import aUser from "../../../Logic/User/aUser";
/**
 * Guest.
 *
 * @class Guest
 * @extends {aUser}
 */
class Member extends aUser {
  constructor(password, age, gender, address) {
    super(userName, age, gender, Address);
    this.password = password;
  }
}
