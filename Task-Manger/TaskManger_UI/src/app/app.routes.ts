import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      { path: 'todo', component: TodoComponent },
      { path: 'todo-form', component: TodoFormComponent },
    ]
  },
];
