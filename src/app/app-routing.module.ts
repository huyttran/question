import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonContentComponent } from './lesson-content/lesson-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'lesson', pathMatch: 'full' },
  { path: 'lesson', component: LessonListComponent },
  { path: 'lesson/:id', component: LessonContentComponent },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
