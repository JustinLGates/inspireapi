import Store from "../store.js";
import User from "../models/user.js";
import store from "../store.js";

class UserService {
  addUser(userData) {
    let user = new User(userData);
    Store.commit("user", user);
    store.saveUser();
  }
  constructor() {}

  checkUserStatus() {
    Store.loadUser();
  }
}

const USER_SERVICE = new UserService();
export default USER_SERVICE;
