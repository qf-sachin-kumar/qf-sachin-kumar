import { QuestionType } from './../enum/question-type';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { Question, TextQuestion, RatingQuestion, SelectQuestion, RankingQuestion, DateQuestion } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionTypeMap = {
    [QuestionType.Text]: this.createTextQuestion,
    [QuestionType.Rating]: this.createRatingQuestion,
    [QuestionType.Select]: this.createSelectQuestion,
    [QuestionType.Ranking]: this.createRankingQuestion,
    [QuestionType.Date]: this.createDateQuestion
  };

  constructor() { }

  createQuestionFormGroup(question: Question): FormGroup {
    const createFn = this.questionTypeMap[question.type];
    if (createFn) {
      return createFn(question as any);
    } else {
      throw new Error(`Unsupported question type: ${question.type}`);
    }
  }

  private createTextQuestion(question: TextQuestion): FormGroup {
    return new FormGroup({
      type: new FormControl(question.type, Validators.required),
      label: new FormControl(question.label, Validators.required),
      key: new FormControl(question.key, Validators.required),
      multiline: new FormControl(false, Validators.required)
    });
  }

  private createRatingQuestion(question: RatingQuestion): FormGroup {
    return new FormGroup({
      type: new FormControl(question.type, Validators.required),
      label: new FormControl(question.label, Validators.required),
      key: new FormControl(question.key, Validators.required),
      min: new FormControl(0, [Validators.required]),
      max: new FormControl(15, [Validators.required]),
      options: new FormArray([])
    });
  }

  private createSelectQuestion(question: SelectQuestion): FormGroup {
    return new FormGroup({
      type: new FormControl(question.type, Validators.required),
      label: new FormControl(question.label, Validators.required),
      key: new FormControl(question.key, Validators.required),
      options: new FormArray([])
    });
  }

  private createRankingQuestion(question: RankingQuestion): FormGroup {
    return new FormGroup({
      type: new FormControl(question.type, Validators.required),
      label: new FormControl(question.label, Validators.required),
      key: new FormControl(question.key, Validators.required),
      options: new FormArray([])
    });
  }

  private createDateQuestion(question: DateQuestion): FormGroup {
    return new FormGroup({
      type: new FormControl(question.type, Validators.required),
      label: new FormControl(question.label, Validators.required),
      key: new FormControl(question.key, Validators.required)
    });
  }
}
