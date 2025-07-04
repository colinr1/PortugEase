import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Quiz, QuizService } from './quizzes.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-quizzes',
  imports: [MatTabsModule, RouterLink],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss',
})
export default class QuizzesComponent {
  beginnerQuizzes: Quiz[] = [];
  intermediateQuizzes: Quiz[] = [];
  advancedQuizzes: Quiz[] = [];
  quizService = inject(QuizService);

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe((quizzes: Quiz[]) => {
      this.beginnerQuizzes = quizzes.filter(
        (quiz) => quiz.level === 'Beginner'
      );
      this.intermediateQuizzes = quizzes.filter(
        (quiz) => quiz.level === 'Intermediate'
      );
      this.advancedQuizzes = quizzes.filter(
        (quiz) => quiz.level === 'Advanced'
      );
    });
  }
}
