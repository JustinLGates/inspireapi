import QuoteService from "../services/quote-service.js";
import store from "../store.js";
import quoteService from "../services/quote-service.js";

function _drawQuote() {
  let quote = store.State.quote;
  document.getElementById("quote").innerHTML = quote.Template;
}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote);
    QuoteService.getQuote();
  }
  getNewQuote() {
    quoteService.getQuote();
  }
}
