package com.portuguese.backend.quizzes.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portuguese.backend.quizzes.entities.Question;
import com.portuguese.backend.quizzes.repositories.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public List<Question> getQuestionsByQuiz(Long quizId) {
        return questionRepository.findByQuizId(quizId);
    }

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }
}
