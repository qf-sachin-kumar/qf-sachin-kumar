import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'todo-todo',
  standalone: true,
  imports: [RouterLink, FilterComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  // Get all the todo

}
