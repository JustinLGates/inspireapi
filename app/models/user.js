export default class User {
  constructor(data) {
    this.name = data.name;
  }

  get Template() {
    return `${this.name ? this.existingUserTemplate : this.newUserTemplate}`;
  }
  d;

  get newUserTemplate() {
    return ` <div class=" new-user">
    <h2> please enter your name to get started</h2>
  
    <form onsubmit="app.userController.addUser(event)">
      <input class="mt-2" type="text" name="name">
      <button type="submit" class="btn btn-success">Submit</button>
    </form>`;
  }
  get existingUserTemplate() {
    return `<h2 class="d-inline">  ${this.name} </h2>`;
  }
}
