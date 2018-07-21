import { Component } from '@angular/core';
import { Answer } from './models/answer/answer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  /** 30/6/2018
   TODO: if isAnswerImediately is true then we won't call checkAnswer
   Question manager should be create new function to handle this case
   Pass isAnswerImediately parameter into question component handle
   Question component won't trigger checkAnswer function when user click on answear if isAnswerImediately is true
   instead of that should fire a parameter back to parent component
   When question component fired paremeter back to parent component then parent will call "abc" function to add result
   answer into a list/array to when user finish their exam will click done button to check their result.
   At this time, "done" function will check list/array result with right answer each question.

   TODO: Next feature: You should create re-radom answer when user click on "resetAnswer" button
   */

  /** 1/7/2018
   *TODO: In the case: User chose the answer and then switch to the other method => what should we do?
   * Task2: change answer then answer array will add the answer continuely
   * DB:
   * 1. Should we seperate answer and question?
   * 2. What benefit will we get if not seperate?
   *  - If not seperate => activity with DB will faster than the other one
   *                    => Can we reusable DB?
   * 3. Can we radom answer if not seperate?
   * 4. How can we radom answer?
   * Idea:
   *  - Server still have static object. We will send the question to client side,
   * to radom answer then client side will responsibility that!
   *
   */

   /**7/7/2018
    * TODO: When show result of the exam we show both correct and incorrect answer!
    *
    */
  questions = [
    {
      questionId: '1',
      question: `1. When do you .... college?`,
      answers: [
        {
          key: 'a',
          answer: `Option 1`,
          questionId: '1',
        },
        {
          key: 'b',
          answer: `Option 2`,
          questionId: '1',

        },
        {
          key: 'c',
          answer: `Option 3`,
          questionId: '1',

        },
        {
          key: 'd',
          answer: `Option 4`,
          questionId: '1',
        }
      ],
      rightAnswer: 'a'
    },
    {
      questionId: '2',
      question: `2. When do you .... college?`,
      answers: [
        {
          key: 'a',
          answer: `2Option 1`,
          questionId: '2',
        },
        {
          key: 'b',
          answer: `2Option 2`,
          questionId: '2',
        },
        {
          key: 'c',
          answer: `2Option 3`,
          questionId: '2',
        },
        {
          key: 'd',
          answer: `2Option 4`,
          questionId: '2',
        }
      ],
      rightAnswer: 'd'
    },
    {
      questionId: '3',
      question: `3. When do you .... college?`,
      answers: [
        {
          key: 'a',
          answer: `3Option 1`,
          questionId: '3',
        },
        {
          key: 'b',
          answer: `3Option 2`,
          questionId: '3',
        },
        {
          key: 'c',
          answer: `3Option 3`,
          questionId: '3',
        },
        {
          key: 'd',
          answer: `3Option 4`,
          questionId: '3',
        }
      ],
      rightAnswer: 'b'
    },
    {
      questionId: '4',
      question: `4. When do you .... college?`,
      answers: [
        {
          key: 'a',
          answer: `4Option 1`,
          questionId: '4',
        },
        {
          key: 'b',
          answer: `4Option 2`,
          questionId: '4',
        },
        {
          key: 'c',
          answer: `4Option 3`,
          questionId: '4',
        },
        {
          key: 'd',
          answer: `4Option 4`,
          questionId: '4',
        }
      ],
      rightAnswer: 'c'
    },
  ];
  testSubmit;
  anwserArr: Answer[] = [];
  isAnswerImmediately = false;
  isShowCorrectAnswer = false;
  checkMethod(method) {
    this.isAnswerImmediately = method;
    this.isShowCorrectAnswer = false;

  }
  catchAnswerFromChild(event) {
    this.pushAnswerFromChildIntoAnswerArr(event);
  }

  submit() {
    this.isAnswerImmediately = true;
    this.isShowCorrectAnswer = true;
  }

  pushAnswerFromChildIntoAnswerArr(answerInput: Answer) {
    this.anwserArr = this.anwserArr.filter(answerEl => answerEl.questionId !== answerInput.questionId);
    this.anwserArr.push(answerInput);
    return;
  }
}
