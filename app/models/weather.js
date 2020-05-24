export default class Weather {
  constructor(data) {
    // console.log("[RAW WEATHER API DATA]", data);
    //      check out the other data that comes back and see if there is anything you want to try
    this.city = data.name;
    this.kelvin = data.main.temp;
    this.farenheit = Math.floor((this.kelvin * 9) / 5 - 459.67);
    this.celsius = Math.floor(this.kelvin - 273.15);
    console.log(this.celsius);
    this.displayF = true;
  }

  get Template() {
    return `
    <div class="text-left my-card">
        <div class="d-flex justify-content-between">
          <h4 class="p-2">${this.city}</h4>
          <h3 class="p-2"><i title="change temp display" onclick="app.weatherController.toggleTemp()" class="fas fa-thermometer-three-quarters action"></i></h3>
        </div>
        <h3 class="pl-2 d-inline">${
          this.displayF ? this.farenheit : this.celsius
        }</h3><div class="degree-box">     
        <p class="degree d-inline"><i class="far fa-circle"></i></P><p class="p-2 d-inline">${
          this.displayF ? "F" : "C"
        }</p>
        </div>
    </div>`;
  }
}
