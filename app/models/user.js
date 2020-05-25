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
    <h1>Welcome</h1>
    <p class=" m-1 p-1 ">Please tell us your name to get started.</p>
    <form onsubmit="app.userController.addUser(event)">
      <input class="mt-2" type="text" name="name">
      <button type="submit" class="btn btn-success">Submit</button>
    </form>`;
  }
  get existingUserTemplate() {
    return `<h2> Welcome, ${this.name} </h2>`;
  }
}
