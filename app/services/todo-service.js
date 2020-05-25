import store from "../store.js";
import Todo from "../models/Todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/justMe/todos/",
  timeout: 8000,
});

class TodoService {
  constructor() {
    this.getTodos();
  }
  addTodo(text) {
    this.postTodo(new Todo(text));
  }
  getTodos() {
    todoApi
      .get()
      .then((res) => {
        let todos = res.data.data;
        let newTodos = todos.map((e) => new Todo(e));
        store.commit("todos", newTodos);
      })
      .catch((err) => console.error(err));
  }

  postTodo(todo) {
    todoApi
      .post("", todo)
      .then(
        setTimeout(() => {
          this.getTodos();
        }, 100)
      )
      .catch((err) => console.error(err));
  }

  toggleTodoStatus(todoId) {
    let todo = store.State.todos.find((todo) => todo._id == todoId);
    if (todo.completed) {
      todo.completed = false;
    } else if (!todo.completed) {
      todo.completed = true;
    }
    todoApi.put(todoId, todo).then((res) => this.getTodos());
  }

  removeTodo(id) {
    todoApi.delete(id).then((res) => this.getTodos());
  }
}
const todoService = new TodoService();
export default todoService;
