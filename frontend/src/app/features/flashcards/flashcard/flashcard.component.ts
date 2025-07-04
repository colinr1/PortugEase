// flashcard.component.ts
import { Component, OnInit } from '@angular/core';
// import { Flashcard } from './flashcard.model';
import { CommonModule } from '@angular/common';
import { Flashcard } from '../flashcards.service';

@Component({
  selector: 'app-flashcard',
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.scss',
})
export default class FlashcardComponent {
  flashcards: Flashcard[] = [];
  currentflashCard: Flashcard | null = null;
  showBack = false;
  currentFlashcardIndex: number = 0;
  currentFlashcard: Flashcard | undefined;
  totalFlashcards: number = 0;

  moveToNextFlashcard() {
    this.currentFlashcardIndex++;
    if (this.currentFlashcardIndex < this.totalFlashcards) {
      this.currentFlashcard = this.flashcards[this.currentFlashcardIndex];
    } else {
      this.currentFlashcard = undefined;
    }
  }
}
