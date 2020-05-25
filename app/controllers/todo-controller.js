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
let todosOpen = false;
function toggleShowHide() {
  if (todosOpen) {
    document.getElementById("todoSection").classList.add("hidden");
    todosOpen = false;
    return;
  }
  document.getElementById("todoSection").classList.remove("hidden");
  todosOpen = true;
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = {
      description: form.todo.value,
    };
    TodoService.addTodo(todo);
    form.reset();
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

  delete(id) {
    TodoService.removeTodo(id);
  }
  toggleTodos() {
    toggleShowHide();
  }
}
