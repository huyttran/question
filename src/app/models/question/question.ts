import { Answer } from '../answer/answer';

export class Question {
  questionId: string;
  questionText: string;
  answers: [Answer];
  rightAnswer: string;
}
