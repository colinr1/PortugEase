package com.portuguese.backend.flashcards.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portuguese.backend.flashcards.entities.Flashcard;
import com.portuguese.backend.flashcards.services.FlashcardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/flashcards")	
@RequiredArgsConstructor
public class FlashcardController {
    private final FlashcardService flashcardService;

    @GetMapping("/{flashcardDeckId}")
    public List<Flashcard> getFlashcardByFlashcardDeck(@PathVariable Long flashcardDeckId) {
        return flashcardService.getFlashcardsByFlashcardDeck(flashcardDeckId);
    }

    @PostMapping
    public Flashcard createFlashcard(@RequestBody Flashcard flashcard) {
        return flashcardService.createFlashcard(flashcard);
    }
}
