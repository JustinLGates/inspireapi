import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let tasksRemaining = 0;
  let template2 = "";
  let todos = store.State.todos;
  if (todos) {
    todos.forEach((td) => {
      template2 += td.Template;
      if (!td.completed) {
        tasksRemaining++;
      }
    });
    document.getElementById("taskTotal").innerText = tasksRemaining.toString();
    document.getElementById("todos").innerHTML = template2;
    return;
  }
  document.getElementById("todos").innerHTML = template2;
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
