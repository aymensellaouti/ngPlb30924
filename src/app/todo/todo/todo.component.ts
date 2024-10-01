import { Component } from "@angular/core";
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent {
  // State
  /**
   * La liste des todos à afficher
   */
  todos: Todo[] = [];
  /**
   * Le todo à ajouter
   */
  todo = new Todo();
  constructor() {}
}
