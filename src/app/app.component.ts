import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  questionModel = {
    question: `When do you .... college?`,
    answer: {
      a: `Option 1`,
      b: `Option 2`,
      c: `Option 3`,
      d: `Option 4`,
    },
    rightAnswer: `a`
  };
  show = null;
  checkAnswer(answer) {
    if (answer === this.questionModel.rightAnswer) {
      console.log('right');
      this.show = true;
    } else {
      console.log('wrong');
      this.show = false;
    }
  }
}
