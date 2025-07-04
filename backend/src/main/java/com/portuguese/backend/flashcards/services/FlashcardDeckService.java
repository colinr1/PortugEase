package com.portuguese.backend.flashcards.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portuguese.backend.flashcards.entities.FlashcardDeck;
import com.portuguese.backend.flashcards.repositories.FlashcardDeckRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FlashcardDeckService {
    private final FlashcardDeckRepository flashcardDeckRepository;

    public List<FlashcardDeck> getAllFlashcardDecks() {
        return flashcardDeckRepository.findAll();
    }

    public FlashcardDeck createFlashcardDeck(FlashcardDeck flashcardDeck) {
        return flashcardDeckRepository.save(flashcardDeck);
    }
}
