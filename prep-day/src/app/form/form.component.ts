import { Component, input, OnInit } from '@angular/core';
import { QuestionService } from '../services/question-service.service';
import { JsonPipe } from '@angular/common';
import { QuestionType } from '../enum/question-type';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { QUESTION_MENU, QuestionMenu } from '../constants/question-menu.contant';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    JsonPipe,
    QuestionComponent,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  public form = input.required<FormGroup<{
    key: FormControl<number>,
    name: FormControl<string>,
    questions: FormArray<FormGroup>
  }>>();

  questionType: typeof QuestionType = QuestionType

  public readonly questionMenu: QuestionMenu[] = QUESTION_MENU;

  questions: FormArray<FormGroup> = new FormArray<FormGroup>([])

  constructor(private _questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questions = this.form().get('questions') as FormArray;
    console.log(this.form())
  }

  addQuestion(type: QuestionType) {
    this.questions.push(this._questionService.createQuestionFormGroup({ key: this.questions.length.toString(), label: '', type: type }))
  }

}
