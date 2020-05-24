export default class Todo {
  constructor(data) {
    this.user = data.user;
    this._id = data._id;
    this.completed = data.completed;
    this.description = data.description;
  }
  get Template() {
    return `
<div class="col-4">
    <div class="card-2 p-1 m-1"> 
      <h3></h3>
      <p>${this.description}</p>
    </div>
</div>`;
  }
}
