import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './Questions/Question.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionServiceComponent } from './Services/Question.Services';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [QuestionServiceComponent],
})
export class AppModule { }
