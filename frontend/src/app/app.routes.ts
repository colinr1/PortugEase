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
    path: 'grammar',
    loadComponent: () => import('./features/grammar/grammar.component'),
  },
  {
    path: 'sentences',
    loadComponent: () =>
      import('./features/sentence-builder/sentence-builder.component'),
  },
];
