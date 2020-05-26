export default class Clock {
  constructor(data) {
    this.year = data.year;
    this.day = data.day;
    this.month = data.month;
    this.hour = data.hour;
    this.minutes = data.minutes;
    this.isAm = data.isAm;
    this.phrase = data.phrase;
  }

  get Template() {
    return ` 
    <div class="my-card d-inline p-2 m-0 pt-3 ">
      <h2 class="d-inline p-0 m-0">${this.hour}:${
      this.minutes >= 10 ? this.minutes : "0" + this.minutes
    }
    </h2><h6 class="d-inline"> ${this.isAm ? "P.M." : "A.M."}</h6>
    </div>`;
  }
}
