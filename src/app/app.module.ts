import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { LessonContentComponent } from './lesson-content/lesson-content.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LessonListComponent,
    ItemComponent,
    ListItemComponent,
    LessonContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
