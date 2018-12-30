import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../Shared/Model/Question';

@Injectable()
export class QuestionServiceComponent {
    constructor(private http: HttpClient) {
    }

    GetAllQuestions(): Observable<Question[]> {
        return this.http.get<Question[]>('https://dry-shelf-22302.herokuapp.com/questions');
    }
}
