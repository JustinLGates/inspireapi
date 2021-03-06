import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000,
});
class ImageService {
  getImage() {
    imgApi.get("").then((res) => {
      let image = res.data.large_url;
      store.commit("image", image);
    });
  }
}
const imageService = new ImageService();
export default imageService;
