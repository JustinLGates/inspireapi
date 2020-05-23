import WeatherController from "./controllers/weather-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ToDoController from "./controllers/todo-controller.js";
import ClockController from "./controllers/clockController.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.dateController = new ClockController();
    this.imageController = new ImageController();
    this.toDoController = new ToDoController();
    this.quoteController = new QuoteController();
    this.weatherController = new WeatherController();
  }
}

window["app"] = new App();
