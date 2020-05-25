import Store from "../store.js";
import USER_SERVICE from "../services/userService.js";

function _drawWelcomeMessage() {
  console.log("drawing msgss....");

  let user = Store.State.user;
  document.getElementById("welcome-message").innerHTML = user.Template;
}

export default class userController {
  constructor() {
    Store.subscribe("user", _drawWelcomeMessage);
    USER_SERVICE.checkUserStatus();
  }
  addUser(event) {
    event.preventDefault();
    let userData = { name: event.target.name.value };
    USER_SERVICE.addUser(userData);
  }
}
