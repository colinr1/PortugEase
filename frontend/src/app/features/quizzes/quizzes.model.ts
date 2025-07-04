export class Quiz {
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

export class Question {
  id: number;
  question: string;
  quiz: Quiz;

  constructor(id: number, question: string, quiz: Quiz) {
    this.id = id;
    this.question = question;
    this.quiz = quiz;
  }
}

export class Answer {
  id: number;
  answerText: string;
  question: Question;
  correct: boolean;

  constructor(
    id: number,
    answerText: string,
    question: Question,
    correct: boolean
  ) {
    this.id = id;
    this.answerText = answerText;
    this.question = question;
    this.correct = correct;
  }
}
