import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionType } from '../../enum/question-type';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-question',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule],
  templateUrl: './date-question.component.html',
  styleUrl: './date-question.component.scss'
})
export class DateQuestionComponent {
  public question = input.required<FormGroup<{
    key: FormControl<string>,
    type: FormControl<QuestionType>,
    label: FormControl<string>
  }>>();
}
