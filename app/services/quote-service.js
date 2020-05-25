import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000,
});
class QuoteService {
  getQuote() {
    _quoteApi.get("").then((res) => {
      let quote = { body: res.data.quote.body, author: res.data.quote.author };
      let newQuote = new Quote(quote);
      store.commit("quote", newQuote);
    });
  }
}
const quoteService = new QuoteService();
export default quoteService;
