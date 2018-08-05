import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss']
})
export class LessonContentComponent implements OnInit {
  lessonId;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getId();
  }

  getId() {
    this.route.params.subscribe(params => {
      this.lessonId = +params['id'];
    });
  }
}
