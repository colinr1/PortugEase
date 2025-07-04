import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FlashcardDeck {
  id: number;
  level: string;
  category: string;
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
  flashcardDeckId: number;
}

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  private apiUrl = 'http://localhost:5000/api'; // Adjust the URL based on your backend

  constructor(private http: HttpClient) {}

  // Fetch all flashcards
  getFlashcardDecks(): Observable<FlashcardDeck[]> {
    return this.http.get<FlashcardDeck[]>(`${this.apiUrl}/flashcarddecks`);
  }

  // Fetch questions for a specific flashcard
  getFlashcardByFlashcardDeck(
    flashcardDeckId: number
  ): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(
      `${this.apiUrl}/flashcarddecks/${flashcardDeckId}`
    );
  }
}
