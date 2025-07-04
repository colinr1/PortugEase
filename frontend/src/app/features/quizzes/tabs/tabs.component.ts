import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { Quiz, QuizService } from '../quizzes.service';

@Component({
  selector: 'app-tabs',
  imports: [MatTabsModule, RouterLink],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements OnInit {
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
