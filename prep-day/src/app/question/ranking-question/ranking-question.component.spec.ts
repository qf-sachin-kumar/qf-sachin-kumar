import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingQuestionComponent } from './ranking-question.component';

describe('RankingQuestionComponent', () => {
  let component: RankingQuestionComponent;
  let fixture: ComponentFixture<RankingQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
