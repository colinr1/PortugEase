import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'quizzes',
    loadComponent: () => import('./features/quizzes/quizzes.component'),
  },
  {
    path: 'flashcards',
    loadComponent: () => import('./features/flashcards/flashcards.component'),
  },
  {
    path: 'lessons',
    loadComponent: () => import('./features/lessons/lessons.component'),
  },
  {
    path: 'sentences',
    loadComponent: () =>
      import('./features/sentence-builder/sentence-builder.component'),
  },
  {
    path: 'quiz/:quizId',
    loadComponent: () => import('./features/quizzes/quiz/quiz.component'),
  },
  {
    path: 'flashcard/:flashcardDeckId',
    loadComponent: () =>
      import('./features/flashcards/flashcard/flashcard.component'),
  },
];
