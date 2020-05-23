import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000,
});
class QuoteService {
  getQuote() {
    _quoteApi.get("").then((res) => {
      let quote = res.data.quote.body;
      store.commit("quote", quote);
    });
  }
}
const quoteService = new QuoteService();
export default quoteService;
