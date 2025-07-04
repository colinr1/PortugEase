export class FlashcardDeck {
  id: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;

  constructor(
    id: number,
    level: 'Beginner' | 'Intermediate' | 'Advanced',
    category: string
  ) {
    this.id = id;
    this.level = level;
    this.category = category;
  }
}

export class Flashcard {
  id: number;
  front: string;
  back: string;
  flashcardDeckId: number;

  constructor(
    id: number,
    front: string,
    back: string,
    flashcardDeck: FlashcardDeck
  ) {
    this.id = id;
    this.front = front;
    this.back = back;
    this.flashcardDeckId = flashcardDeck.id;
  }
}
