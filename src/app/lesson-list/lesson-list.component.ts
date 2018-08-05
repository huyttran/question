import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss'],
  providers: [LessonService]
})
export class LessonListComponent implements OnInit {
  // lessons = [
  //   {
  //     id: 1,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 2,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 3,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 4,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 5,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 6,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 7,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 8,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 9,
  //     lessonName: 'Verb and Object'
  //   },
  //   {
  //     id: 10,
  //     lessonName: 'Verb and Object'
  //   },
  // ];
  lessons;
  selectedLesson;
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.getLessons();
  }

  getLessons() {
    this.lessonService.getLessonsMenu().then(lessons => {
      this.lessons = lessons;
    });
  }
  onSelect(lesson) {
    this.selectedLesson = lesson;
  }

}
