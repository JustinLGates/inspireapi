export default class Todo {
  constructor(data) {
    this.user = data.user;
    this._id = data._id;
    this.completed = data.completed;
    this.description = data.description;
  }

  get Template() {
    return `
    <div id="todosedit" class="col-12 col-md-4 col-lg-3">
                  <div class=" ${
                    this.completed ? " my-card-done " : " my-card "
                  } p-1 m-1 d-flex justify-content-between align-items-center">
                    <input ${
                      this.completed ? " checked " : ""
                    } onclick="app.toDoController.toggleTodoStatus('${
      this._id
    }')" type="checkbox"  class="action d-inline align-self-start m-1 mt-2">
                    <p class="d-inline align-self-right">${this.description}</p>
                    <i onclick="app.toDoController.delete('${
                      this._id
                    }')" class="fa fa-close text-danger text-right action align-self-start p-1 m-1"></i>
                  </div>
                </div>`;
  }
}
