import { Component } from '@angular/core';
import { QuestionServiceComponent } from '../Services/Question.Services';
import { Question } from '../Shared/Model/Question';

@Component({
    selector: 'app-ques',
    templateUrl: './Question.component.html'
})

export class QuestionComponent {
    heading: string;
    questionList: Question[];
    constructor(private service: QuestionServiceComponent) {
        this.heading = 'dhanashree jambekar add new question';
        this.getAllQuestions();
    }
    getAllQuestions() {
        this.service.GetAllQuestions().subscribe((data) => {
            this.questionList = data;
            console.log(this.questionList);
        });
    }
}

