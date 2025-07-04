package com.portuguese.backend.flashcards.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portuguese.backend.flashcards.entities.FlashcardDeck;
import com.portuguese.backend.flashcards.services.FlashcardDeckService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/flashcarddecks")
@RequiredArgsConstructor
public class FlashcardDeckController {
    private final FlashcardDeckService flashcardDeckService;

    @GetMapping
    public List<FlashcardDeck> getAllFlashcardDecks() {
        return flashcardDeckService.getAllFlashcardDecks();
    }

    @PostMapping
    public FlashcardDeck createFlashcardDeck(@RequestBody FlashcardDeck flashcardDeck) {
        return flashcardDeckService.createFlashcardDeck(flashcardDeck);
    }
}
