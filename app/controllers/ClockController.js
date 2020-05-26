import Store from "../store.js";
import CLOCK_SERVICE from "../services/ClockService.js";

function _drawClock() {
  let template = Store.State.clock.Template;
  document.getElementById("clock").innerHTML = template;
}
function _drawGreating() {}

export default class clockController {
  constructor() {
    Store.subscribe("clock", _drawClock);
    CLOCK_SERVICE.start();
    _drawGreating();
  }
  toggleArmyTime() {
    CLOCK_SERVICE.toggleArmyTime();
  }
}
