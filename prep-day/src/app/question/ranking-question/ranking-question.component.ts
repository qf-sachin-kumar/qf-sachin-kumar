import { Component, input } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionType } from '../../enum/question-type';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ranking-question',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './ranking-question.component.html',
  styleUrl: './ranking-question.component.scss'
})
export class RankingQuestionComponent {
  public question = input.required<FormGroup<{
    key: FormControl<string>,
    type: FormControl<QuestionType>,
    label: FormControl<string>
    options: FormArray<FormGroup>
  }>>();
}
