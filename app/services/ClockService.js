import Clock from "../models/Clock.js";
import Store from "../store.js";
import store from "../store.js";
function startClock() {
  setInterval(() => {
    updateClock();
  }, 1000);
}

function updateClock(data) {
  let clock = new Clock(getData());
  store.commit("clock", clock);
}
function getData() {
  let date = new Date();
  let mo = date.getMonth();
  let d = date.getDay();
  let h = date.getHours() > 12 ? date.getHours() % 12 : date.getHours();
  let m = date.getMinutes();
  let yr = date.getFullYear();
  let isAm = date.getHours() >= 12 ? true : false;
  let data = {
    year: yr,
    month: mo,
    day: d,
    hour: h,
    minutes: m,
    isAm: isAm,
  };
  return data;
}

class ClockService {
  constructor() {
    startClock();
  }
}

const CLOCK_SERVICE = new ClockService();
export default CLOCK_SERVICE;
