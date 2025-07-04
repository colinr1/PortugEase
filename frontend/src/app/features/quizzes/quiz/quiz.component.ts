import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PercentPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuizService, Question, Answer, Quiz } from '../quizzes.service';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink, PercentPipe, HttpClientModule],
  providers: [QuizService],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export default class QuizComponent {
  questions: Question[] = [];
  answers: { [key: number]: Answer[] } = {};
  userAnswers: { [key: number]: string } = {};
  currentQuestionIndex: number = 0;
  currentQuestion: Question | undefined;
  totalQuestions: number = 0;
  selectedAnswer: string = '';
  score: number = 0;
  quizService = inject(QuizService);
  route = inject(ActivatedRoute);
  quiz: Quiz[] = [];
  quizId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.quizId = Number(params.get('quizId'));
      if (!isNaN(this.quizId)) {
        this.loadQuestions(this.quizId);
      }
    });
    this.quizService.getQuizzes().subscribe((quizzes: Quiz[]) => {
      this.quiz = quizzes.filter((quiz) => quiz.id == this.quizId);
    });
  }

  loadQuestions(quizId: number) {
    this.quizService.getQuestionsByQuiz(quizId).subscribe((questions) => {
      this.questions = questions;
      this.totalQuestions = questions.length;
      this.currentQuestion = this.questions[this.currentQuestionIndex];

      this.questions.forEach((question) => {
        this.quizService
          .getAnswersByQuestion(question.id)
          .subscribe((answers) => {
            this.answers[question.id] = this.shuffleArray(answers);
          });
      });
    });
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  onSelecting(event: Event) {
    this.selectedAnswer = (event.target as HTMLInputElement).value;
    this.userAnswers[this.currentQuestion!.id] = this.selectedAnswer;
  }

  onPrev() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = this.userAnswers[this.currentQuestion!.id] || '';
      // Before moving to the previous question, adjust the score if necessary
      const correctAnswer = this.answers[this.currentQuestion!.id].find(
        (ans) => ans.correct
      );
      // const previousAnswer = this.userAnswers[this.currentQuestion!.id];

      // If the previous answer was correct, decrease the score
      if (this.selectedAnswer === correctAnswer?.answerText) {
        this.score--;
      }

      // Restore the previously selected answer
    }
  }

  // Navigate to the next question and update the score
  onNext() {
    const correctAnswer = this.answers[this.currentQuestion!.id].find(
      (ans) => ans.correct
    );
    const previouslySelectedAnswer = this.userAnswers[this.currentQuestion!.id];

    // If the selected answer is correct, increment the score
    if (this.selectedAnswer === correctAnswer?.answerText) {
      this.score++;
    }

    // If the previous answer was correct and the user changed it, decrement the score
    if (
      previouslySelectedAnswer === correctAnswer?.answerText &&
      this.selectedAnswer !== correctAnswer?.answerText
    ) {
      this.score--;
    }

    // Store the selected answer for this question
    this.userAnswers[this.currentQuestion!.id] = this.selectedAnswer;

    this.moveToNextQuestion();
  }

  // Move to the next question or end the quiz
  moveToNextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      // Restore the previously selected answer if any
      this.selectedAnswer = this.userAnswers[this.currentQuestion!.id] || '';
    } else {
      this.currentQuestion = undefined; // End of quiz
    }
  }
}
