import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { TodoComponent } from '../todo/todo.component';
import { FilterComponent } from '../filter/filter.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'todo-dashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TodoComponent,  RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



  addTodo() {

  }
}
