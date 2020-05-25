export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.body = data.body;
  }
  get Template() {
    return `<p data-toggle="tooltip" data-placement="top" title="${this.author}" class=" quote m-2 my-card d-inline p-3">${this.body}</p> <p class="showonhover"></p>`;
  }
}
