import { Component, inject } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { TodoDto } from "../dto/todo.dto";
import { Observable } from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  // State
  /**
   * La liste des todos à afficher
   */
  todos: Todo[] = this.todoService.getTodos();

  todosDto: TodoDto[] = [];

  todosDto$: Observable<TodoDto[]> ;
  /**
   * Le todo à ajouter
   */
  todo = new Todo();
  constructor() {
    // V2, préférez ca mais au début commencer par V1
    this.todosDto$ = this.todoService.getTodosFromApi();
    // V1
    this.todoService.getTodosFromApi().subscribe({
      next: (mesTodosFromApi: TodoDto[]) => {
        this.todosDto = mesTodosFromApi;
      },
    });
  }

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
