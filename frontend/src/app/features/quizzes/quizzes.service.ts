import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quiz {
  id: number;
  level: string;
  category: string;
}

export interface Question {
  id: number;
  question: string;
  quizId: number;
}

export interface Answer {
  id: number;
  answerText: string;
  correct: boolean;
  questionId: number;
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'http://localhost:5000/api'; // Adjust the URL based on your backend

  constructor(private http: HttpClient) {}

  // Fetch all quizzes
  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}/quizzes`);
  }

  // Fetch questions for a specific quiz
  getQuestionsByQuiz(quizId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/questions/${quizId}`);
  }

  // Fetch answers for a specific question
  getAnswersByQuestion(questionId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.apiUrl}/answers/${questionId}`);
  }
}
