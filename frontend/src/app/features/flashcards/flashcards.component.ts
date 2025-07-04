import { Component, inject } from '@angular/core';
// import {  } from './flashcards.model';
import { FlashcardsService, FlashcardDeck } from './flashcards.service';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flashcards',
  imports: [MatTabsModule, RouterLink],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
})
export default class FlashcardsComponent {
  beginnerFlashcardDecks: FlashcardDeck[] = [];
  intermediateFlashcardDecks: FlashcardDeck[] = [];
  advancedFlashcardDecks: FlashcardDeck[] = [];
  flashcardsService = inject(FlashcardsService);

  ngOnInit(): void {
    this.loadFlashcards();
  }

  loadFlashcards() {
    this.flashcardsService
      .getFlashcardDecks()
      .subscribe((flashcardDecks: FlashcardDeck[]) => {
        this.beginnerFlashcardDecks = flashcardDecks.filter(
          (flashcardDeck) => flashcardDeck.level === 'Beginner'
        );
        this.intermediateFlashcardDecks = flashcardDecks.filter(
          (flashcardDeck) => flashcardDeck.level === 'Intermediate'
        );
        this.advancedFlashcardDecks = flashcardDecks.filter(
          (flashcardDeck) => flashcardDeck.level === 'Advanced'
        );
      });
  }
}
