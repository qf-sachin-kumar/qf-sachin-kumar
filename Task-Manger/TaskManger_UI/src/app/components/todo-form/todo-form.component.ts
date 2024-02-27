import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Status } from '../../model/enums/status.enum';

@Component({
  selector: 'todo-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  // todoId: string;

  public todoForm: FormGroup = new FormGroup({
    todoTitle: new FormControl('', Validators.required),
    todoDescription: new FormControl('', Validators.required),
    createdDate: new FormControl(new Date(), Validators.required),
    dueDate: new FormControl(''),
    tasks: new FormControl([], Validators.required),
    status: new FormControl('', this.statusValidator)
  });

  onSubmit() {

  }


  public statusValidator(control: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const statusess: typeof Status = Status;
      const index = Object.values(statusess).findIndex(x => x == control.value);
      if (index == -1) {
        return { value: control.value, message: 'Please choose a valid Status' } as ValidationErrors;
      }
      return null;
    }
  }

}
