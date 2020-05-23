let date = new Date();

function checkTime() {
  console.log(date.getDay());
  console.log(date.getMonth());
  console.log(date.getHours() > 12 ? date.getHours() % 12 : date.getHours());
  console.log(date.getMinutes());

  return date;
}

export default class clockController {
  constructor() {
    checkTime();
  }
}
