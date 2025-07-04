package com.portuguese.backend.quizzes.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portuguese.backend.quizzes.entities.Quiz;
import com.portuguese.backend.quizzes.repositories.QuizRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuizService {
    private final QuizRepository quizRepository;

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }
}
