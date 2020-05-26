import Store from "../store.js";
import USER_SERVICE from "../services/userService.js";
import store from "../store.js";

function _drawWelcomeMessage() {
  let phrase = "";
  if (store.State.clock.phrase) {
    phrase = `<h2 class="d-inline">${store.State.clock.phrase}</h2>`;
  }
  let user = store.State.user;
  document.getElementById("welcome-message").innerHTML = phrase + user.Template;
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
