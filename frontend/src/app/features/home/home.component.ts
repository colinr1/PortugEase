import { Component } from '@angular/core';
import { WotdComponent } from '../wotd/wotd.component';
import { FlashcardsComponent } from '../flashcards/flashcards.component';
import { QuizzesComponent } from '../quizzes/quizzes.component';
import { GrammarComponent } from '../grammar/grammar.component';
import { SentenceBuilderComponent } from '../sentence-builder/sentence-builder.component';

@Component({
  selector: 'app-home',
  imports: [
    WotdComponent,
    FlashcardsComponent,
    QuizzesComponent,
    GrammarComponent,
    SentenceBuilderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
