package com.portuguese.backend.flashcards.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portuguese.backend.flashcards.entities.FlashcardDeck;

@Repository
public interface FlashcardDeckRepository extends JpaRepository<FlashcardDeck, Long> {
}
