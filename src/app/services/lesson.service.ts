import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LessonMenu } from '../models/lesson-group/lesson-menu/lesson-menu';
import { LESSONSMENU } from '../mock-menu';

@Injectable()
export class LessonService {

  constructor() { }

  getLessonsMenu(): Promise<LessonMenu[]> {
    return Promise.resolve(LESSONSMENU);
  }
}
