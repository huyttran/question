import { Component } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  questionModel = {
    question: `When do you .... college?`,
    answers: [
      {
        key: 'a',
        answer: `Option 1`,
      },
      {
        key: 'b',
        answer: `Option 2`,
      },
      {
        key: 'c',
        answer: `Option 3`,
      },
      {
        key: 'd',
        answer: `Option 4`,
      }
    ],
    rightAnswer: `a`
  };

  questionModel2: Question[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  showA = 'deafult';
  showB = 'deafult';
  currentAnswer;
  checkAnswer(answer): void {
    this.currentAnswer = answer;
    console.log(this.currentAnswer);
    if (answer.key === this.questionModel.rightAnswer) {
      // console.log('right');
      this.showA = 'show';
    } else {
      // console.log('wrong');
      this.showA = 'hide';
    }
  }

  // checkAnswerB(answer) {
  //   if (answer === this.questionModel.rightAnswer) {
  //     console.log('right');
  //     this.showB = 'show';
  //   } else {
  //     console.log('wrong');
  //     this.showB = 'hide';
  //   }
  // }
}
