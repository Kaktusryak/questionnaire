export interface AnswerInterface {
  id: string;
  text: string;
  correct: boolean;
}

export interface QuestionInterface {
  id: string;
  text: string;
  type: string
  date: Date;
  answers: AnswerInterface[];
  answered:boolean
}
