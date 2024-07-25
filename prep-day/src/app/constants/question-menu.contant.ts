import { QuestionType } from "../enum/question-type";

export interface QuestionMenu {
  icon: string;
  label: string;
  type: QuestionType;
}

export const QUESTION_MENU: QuestionMenu[] = [
  { icon: 'text_fields', label: 'Text', type: QuestionType.Text },
  { icon: 'star', label: 'Rating', type: QuestionType.Rating },
  { icon: 'checkbox_outline', label: 'Select', type: QuestionType.Select },
  { icon: 'sort', label: 'Ranking', type: QuestionType.Ranking },
  { icon: 'event', label: 'Date', type: QuestionType.Date }
]

