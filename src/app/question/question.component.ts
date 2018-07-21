import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() isShowResultImmediately: boolean = false;
  @Input() isShowResult: boolean;
  @Input() isShowCorrectAnswer: boolean;

  @Output() resultRespone: EventEmitter<any> = new EventEmitter(); // temporary, It should be object
  @Output() numberOfTrueAnswer: EventEmitter<number> = new EventEmitter();

  resultStatus = {
    DEFAULT: 'DEFAULT',
    CORRECT: 'CORRECT',
    INCORRECT: 'INCORRECT'
  };
  currentAnswer;
  userAnswer;
  result = this.resultStatus.DEFAULT;
  constructor() {
  }

  ngOnInit() {
  }

  // if isShowResult is true then show result of checked answer and show correct answer as well
  validateAnswer(userAnswer): void {
    this.userAnswer = userAnswer;
    // if (this.isShowResultImmediately) {
    // TODO: It should change to answer text that will better use key to compare result e.g: 'a', 'b' or 'c'
    if (userAnswer.key === this.question.rightAnswer) {
      this.result = this.resultStatus.CORRECT;
      // this.numberOfTrueAnswer.emit(answer);
    } else {
      this.result = this.resultStatus.INCORRECT;
    }
    // Check answer then show result right way
    // } else {
    // Do not thing
    // }
  }
}

/**
 * Functionality:
 * 1. Check answer show result beside
 * 2. Check answer show result that user check and show correct answer
 * 3. Not show result immediately, just show when user click submit button
 *
 * This component should fire a status back to parent component
 */
