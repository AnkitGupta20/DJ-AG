import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './Questions/Question.component';

export const AppRoutes: Routes = [
    {
        path: 'question', component: QuestionComponent
    },
    {path: '', redirectTo: 'question', pathMatch: 'full'}
];
