import { AfterViewInit, ChangeDetectorRef, Component, Injector, input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { QuestionType } from '../enum/question-type';
import { TextQuestionComponent } from './text-question/text-question.component';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { DateQuestionComponent } from './date-question/date-question.component';
import { RankingQuestionComponent } from './ranking-question/ranking-question.component';
import { RatingQuestionComponent } from './rating-question/rating-question.component';
import { SelectQuestionComponent } from './select-question/select-question.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, AsyncPipe, NgComponentOutlet, MatButtonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit, AfterViewInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  public question = input.required<FormGroup>();
  public questionType: QuestionType = QuestionType.Text;

  public questionComponents: { [key: string]: Type<any> } = {
    [QuestionType.Text]: TextQuestionComponent,
    [QuestionType.Rating]: RatingQuestionComponent,
    [QuestionType.Ranking]: RankingQuestionComponent,
    [QuestionType.Date]: DateQuestionComponent,
    [QuestionType.Select]: SelectQuestionComponent
  }

  public questionComponent: Type<any> = TextQuestionComponent;

  constructor(private injector: Injector, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.questionType = this.question().get('type')?.value ?? QuestionType.Text;
    this.questionComponent = this.questionComponents[this.questionType];
  }

  ngAfterViewInit(): void {
    const componentRef = this.container.createComponent(this.questionComponent, { injector: this.injector });
    componentRef.setInput('question', this.question());
    this.changeDetectorRef.markForCheck();
  }
}
