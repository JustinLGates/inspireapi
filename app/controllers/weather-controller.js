import WeatherService from "../services/weather-service.js";
import store from "../store.js";
import weatherService from "../services/weather-service.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weatherTemplate = store.State.weather.Template;
  document.getElementById("weather").innerHTML = weatherTemplate;
}

export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
  toggleTemp() {
    weatherService.toggleTemp();
  }
}
