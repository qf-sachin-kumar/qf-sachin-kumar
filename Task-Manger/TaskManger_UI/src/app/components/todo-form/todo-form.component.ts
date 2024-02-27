import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    tasks: new FormArray([], Validators.required),
    status: new FormControl('', this.statusValidator),
  });

  public get Tasks(): FormArray { return this.todoForm.get('tasks') as FormArray; }
  // public get Tasks(): FormGroup[] { return (this.todoForm.get('tasks') as FormArray).controls as FormGroup[]; }

  onSubmit() {
    console.log(this.todoForm.value);
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

  public addTask() {
    const taskForm: FormGroup = new FormGroup({
      // todoId
      // taskId
      taskTitle: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      isCompleted: new FormControl(false, Validators.required)
    });

    this.Tasks.push(taskForm);
  }

}
