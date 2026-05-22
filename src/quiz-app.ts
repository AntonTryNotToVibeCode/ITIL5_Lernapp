import { QUESTIONS } from './questions';
import { saveLastScore } from './storage';
import type { Question, QuizMode } from './types';
import { shuffle } from './utils';

type QuizElements = {
  total: HTMLElement;
  current: HTMLElement;
  score: HTMLElement;
  modeLabel: HTMLElement;
  topic: HTMLElement;
  question: HTMLElement;
  answers: HTMLElement;
  feedback: HTMLElement;
  bar: HTMLElement;
  learnButton: HTMLButtonElement;
  examButton: HTMLButtonElement;
  resetButton: HTMLButtonElement;
  checkButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
};

type QuizState = {
  deck: Question[];
  index: number;
  score: number;
  selectedAnswerIndex: number | null;
  isChecked: boolean;
  mode: QuizMode;
};

const EXAM_PASSING_SCORE = 26;
const EXAM_QUESTION_LIMIT = 40;

export class QuizApp {
  private state: QuizState = {
    deck: [],
    index: 0,
    score: 0,
    selectedAnswerIndex: null,
    isChecked: false,
    mode: 'learn',
  };

  public constructor(private readonly elements: QuizElements) {}

  public init(): void {
    this.elements.learnButton.addEventListener('click', () => this.start('learn'));
    this.elements.examButton.addEventListener('click', () => this.start('exam'));
    this.elements.resetButton.addEventListener('click', () => this.start(this.state.mode));
    this.elements.checkButton.addEventListener('click', () => this.checkAnswer());
    this.elements.nextButton.addEventListener('click', () => this.nextQuestion());
    this.elements.total.textContent = String(QUESTIONS.length);
  }

  private start(mode: QuizMode): void {
    const questionLimit = mode === 'exam' ? Math.min(EXAM_QUESTION_LIMIT, QUESTIONS.length) : QUESTIONS.length;

    this.state = {
      deck: shuffle(QUESTIONS).slice(0, questionLimit),
      index: 0,
      score: 0,
      selectedAnswerIndex: null,
      isChecked: false,
      mode,
    };

    this.elements.modeLabel.textContent = mode === 'exam' ? 'Pruefung' : 'Lernen';
    this.render();
  }

  private render(): void {
    const question = this.state.deck[this.state.index];

    this.elements.total.textContent = String(this.state.deck.length || QUESTIONS.length);
    this.elements.current.textContent = String(this.state.deck.length ? this.state.index + 1 : 0);
    this.elements.score.textContent = String(this.state.score);
    this.elements.bar.style.width = this.getProgressWidth();
    this.elements.feedback.classList.add('hidden');
    this.elements.checkButton.classList.toggle('hidden', question === undefined);
    this.elements.nextButton.classList.add('hidden');

    if (question === undefined) {
      this.elements.topic.textContent = '';
      this.elements.question.textContent = 'Starte einen Modus.';
      this.elements.answers.replaceChildren();
      return;
    }

    this.elements.topic.textContent = question.topic;
    this.elements.question.textContent = question.prompt;
    this.elements.answers.replaceChildren(...this.createAnswerButtons(question));
  }

  private createAnswerButtons(question: Question): HTMLButtonElement[] {
    return question.answers.map((answer, answerIndex) => {
      const answerButton = document.createElement('button');
      answerButton.className = 'answer';
      answerButton.type = 'button';
      answerButton.textContent = `${String.fromCharCode(65 + answerIndex)}. ${answer}`;

      answerButton.addEventListener('click', () => this.selectAnswer(answerIndex, answerButton));

      return answerButton;
    });
  }

  private selectAnswer(answerIndex: number, answerButton: HTMLButtonElement): void {
    if (this.state.isChecked) {
      return;
    }

    this.state.selectedAnswerIndex = answerIndex;
    this.elements.answers
      .querySelectorAll<HTMLButtonElement>('.answer')
      .forEach((element) => element.classList.remove('selected'));
    answerButton.classList.add('selected');
  }

  private checkAnswer(): void {
    if (this.state.selectedAnswerIndex === null) {
      return;
    }

    const question = this.state.deck[this.state.index];

    if (question === undefined) {
      return;
    }

    this.state.isChecked = true;

    const isCorrect = this.state.selectedAnswerIndex === question.correctAnswerIndex;

    if (isCorrect) {
      this.state.score += 1;
    }

    this.renderAnswerResult(question);
    this.elements.score.textContent = String(this.state.score);

    if (this.state.mode === 'learn') {
      this.elements.feedback.textContent = `${isCorrect ? 'Richtig.' : 'Falsch.'} ${question.explanation}`;
      this.elements.feedback.classList.remove('hidden');
    }

    this.elements.checkButton.classList.add('hidden');
    this.elements.nextButton.classList.remove('hidden');
  }

  private renderAnswerResult(question: Question): void {
    this.elements.answers
      .querySelectorAll<HTMLButtonElement>('.answer')
      .forEach((element, answerIndex) => {
        if (answerIndex === question.correctAnswerIndex) {
          element.classList.add('correct');
        }

        if (
          answerIndex === this.state.selectedAnswerIndex &&
          answerIndex !== question.correctAnswerIndex
        ) {
          element.classList.add('wrong');
        }
      });
  }

  private nextQuestion(): void {
    this.state.index += 1;
    this.state.selectedAnswerIndex = null;
    this.state.isChecked = false;

    if (this.state.index >= this.state.deck.length) {
      this.showResult();
      return;
    }

    this.render();
  }

  private showResult(): void {
    this.elements.bar.style.width = '100%';
    this.elements.question.textContent = this.getResultText();
    this.elements.answers.replaceChildren();
    this.elements.topic.textContent = 'Ergebnis';
    this.elements.checkButton.classList.add('hidden');
    this.elements.nextButton.classList.add('hidden');

    saveLastScore({
      score: this.state.score,
      total: this.state.deck.length,
      date: new Date().toISOString(),
    });
  }

  private getResultText(): string {
    if (this.state.mode === 'exam') {
      const result = this.state.score >= EXAM_PASSING_SCORE ? 'Bestanden' : 'Noch nicht bestanden';
      return `Pruefung beendet: ${this.state.score} von ${this.state.deck.length} richtig. ${result}.`;
    }

    return `Lernrunde beendet: ${this.state.score} von ${this.state.deck.length} richtig.`;
  }

  private getProgressWidth(): string {
    if (this.state.deck.length === 0) {
      return '0%';
    }

    return `${(this.state.index / this.state.deck.length) * 100}%`;
  }
}

export function createQuizApp(elements: QuizElements): QuizApp {
  return new QuizApp(elements);
}
