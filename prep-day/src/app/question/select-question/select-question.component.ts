import { Component, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { QuestionType } from '../../enum/question-type';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-select-question',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './select-question.component.html',
  styleUrl: './select-question.component.scss'
})
export class SelectQuestionComponent {
  public question = input.required<FormGroup<{
    key: FormControl<string>,
    type: FormControl<QuestionType>,
    label: FormControl<string>,
    options: FormArray<FormGroup>
  }>>();

  public get Options() {
    return this.question().get('options') as FormArray;
  }

  addOption() {
   this.Options.push(new FormGroup({
    text: new FormControl('Option ' + (this.Options.length + 1))
   }))
  }
}
