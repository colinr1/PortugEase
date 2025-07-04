package com.portuguese.backend.flashcards.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portuguese.backend.flashcards.entities.Flashcard;

@Repository
public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {
    List<Flashcard> findByFlashcardDeckId(Long flashcardDeckId);
}
