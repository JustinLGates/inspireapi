import QuoteService from "../services/quote-service.js";
import store from "../store.js";

function _drawQuote() {
  let quote = store.State.quote;
  document.getElementById("quote").innerText = quote;
}
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote);
    QuoteService.getQuote();
  }
}
