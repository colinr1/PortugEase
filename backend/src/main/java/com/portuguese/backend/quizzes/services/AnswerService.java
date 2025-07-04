package com.portuguese.backend.quizzes.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portuguese.backend.quizzes.entities.Answer;
import com.portuguese.backend.quizzes.repositories.AnswerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;

    public List<Answer> getAnswersByQuestion(Long questionId) {
        return answerRepository.findByQuestionId(questionId);
    }

    public Answer createAnswer(Answer answer) {
        return answerRepository.save(answer);
    }
}
