export type QuizMode = 'learn' | 'exam';

export type Question = {
  topic: string;
  prompt: string;
  answers: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export type LastScore = {
  score: number;
  total: number;
  date: string;
};
