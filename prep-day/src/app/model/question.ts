import { QuestionType } from "../enum/question-type";

export interface Question {
  key: string;
  type: QuestionType;
  label: string;
}

export interface TextQuestion extends Question {
  type: QuestionType.Text;
  multiline: boolean;
}

export interface RatingQuestion extends Question {
  type: QuestionType.Rating;
  min: number;
  max: number;
}

export interface SelectQuestion extends Question {
  type: QuestionType.Select;
  options: string[];
}

export interface RankingQuestion extends Question {
  type: QuestionType.Ranking;
  options: string[];
}

export interface DateQuestion extends Question {
  type: QuestionType.Date;
}

// export type Question = TextQuestion | RatingQuestion | SelectQuestion | RankingQuestion | DateQuestion;
