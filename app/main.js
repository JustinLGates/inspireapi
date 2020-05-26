import ClockController from "./controllers/clockController.js";
import WeatherController from "./controllers/weather-controller.js";
import ImageController from "./controllers/image-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ToDoController from "./controllers/todo-controller.js";
import userController from "./controllers/UserController.js";

class App {
  constructor() {
    this.imageController = new ImageController();
    this.toDoController = new ToDoController();
    this.quoteController = new QuoteController();
    this.weatherController = new WeatherController();
    this.dateController = new ClockController();
    this.userController = new userController();
  }
}

window["app"] = new App();
