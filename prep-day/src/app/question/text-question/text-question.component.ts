import { Component, input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { QuestionType } from '../../enum/question-type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-text-question',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule],
  templateUrl: './text-question.component.html',
  styleUrl: './text-question.component.scss'
})
export class TextQuestionComponent implements OnInit {
  public question = input.required<FormGroup<{
    key: FormControl<string>,
    type: FormControl<QuestionType>,
    label: FormControl<string>,
    multiline: FormControl<boolean>
  }>>();

  ngOnInit(): void { }

}
