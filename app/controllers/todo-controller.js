import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let template = "";
  let todos = store.State.todos;
  if (todos) {
    todos.forEach((td) => (template += td.Template));
    document.getElementById("todos").innerHTML = template;
    return;
  }
  document.getElementById("todos").innerHTML = template;
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
    };
    // TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    // TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    // TodoService.removeTodoAsync(todoId);
  }
}
