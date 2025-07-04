package com.portuguese.backend.flashcards.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portuguese.backend.flashcards.entities.Flashcard;
import com.portuguese.backend.flashcards.repositories.FlashcardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    public List<Flashcard> getFlashcardsByFlashcardDeck(Long flashcardDeckId) {
        return flashcardRepository.findByFlashcardDeckId(flashcardDeckId);
    }

    public Flashcard createFlashcard(Flashcard flashcard) {
        return flashcardRepository.save(flashcard);
    }
}
