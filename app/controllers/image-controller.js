import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let imgUrl = store.State.image;
  document.getElementById(
    "background-image"
  ).innerHTML = `<img src="${imgUrl}" class="mainImg img-fluid">`;
}

export default class ImageController {
  constructor() {
    store.subscribe("image", _drawImage);
    ImageService.getImage();
  }
}
