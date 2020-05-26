import Clock from "../models/Clock.js";
import Store from "../store.js";

function startClock() {
  updateClock();

  setInterval(() => {
    updateClock();
  }, 5000);
}

function updateClock() {
  let clock = new Clock(getData());
  Store.commit("clock", clock);
}
let isArmyTime;
function getData() {
  let date = new Date();
  let mo = date.getMonth();
  let d = date.getDay();
  let h = date.getHours();
  let m = date.getMinutes();
  let yr = date.getFullYear();
  let isAm = date.getHours() >= 12 ? true : false;
  let timeOfDay = "";
  let armyTime = date.getHours();
  let isarmytime;
  isArmyTime ? (isarmytime = true) : (isarmytime = false);
  if (h >= 22 || h < 5) {
    timeOfDay = "Good night";
  } else if (h >= 17) {
    timeOfDay = "Good evening";
  } else if (h >= 12) {
    timeOfDay = "Good afternoon";
  } else {
    timeOfDay = "Good morning";
  }
  h = date.getHours() > 12 ? date.getHours() % 12 : date.getHours();
  let data = {
    year: yr,
    month: mo,
    day: d,
    hour: h,
    minutes: m,
    isAm: isAm,
    phrase: timeOfDay,
    armyH: armyTime,
    armyTime: isarmytime,
  };

  return data;
}

class ClockService {
  toggleArmyTime() {
    let inArmyTime = Store.State.clock.armyTime;
    inArmyTime ? (isArmyTime = false) : (isArmyTime = true);
    updateClock();
  }

  constructor() {}
  start() {
    startClock();
  }
}

const CLOCK_SERVICE = new ClockService();
export default CLOCK_SERVICE;
