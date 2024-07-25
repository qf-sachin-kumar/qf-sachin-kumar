import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prep-day';

  forms: FormArray<FormGroup<{
    key: FormControl<number>,
    name: FormControl<string>,
    questions: FormArray<FormGroup>
  }>> = new FormArray<FormGroup<{
    key: FormControl<number>,
    name: FormControl<string>,
    questions: FormArray<FormGroup>
  }>>([]);

  addForm() {
    const newForm = new FormGroup({
      key: new FormControl<number>(this.forms.length),
      name: new FormControl<string>('Section ' + (this.forms.length + 1), Validators.required),
      questions: new FormArray<FormGroup>([])
    })
    this.forms.push(newForm as FormGroup<{
      key: FormControl<number>,
      name: FormControl<string>,
      questions: FormArray<FormGroup>
    }>);
  }
}
