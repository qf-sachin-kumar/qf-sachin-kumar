import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionType } from '../../enum/question-type';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-rating-question',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule],
  templateUrl: './rating-question.component.html',
  styleUrl: './rating-question.component.scss'
})
export class RatingQuestionComponent {
  public question = input.required<FormGroup<{
    key: FormControl<string>,
    type: FormControl<QuestionType>,
    label: FormControl<string>,
    min: FormControl<number>
    max: FormControl<number>
  }>>();
}
