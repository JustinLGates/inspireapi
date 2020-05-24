import Store from "../store.js";
import ClockService from "../services/ClockService.js";
import store from "../store.js";
function _drawClock() {
  let template = store.State.clock.Template;
  document.getElementById("clock").innerHTML = template;
}

export default class clockController {
  constructor() {
    Store.subscribe("clock", _drawClock);
  }
}
