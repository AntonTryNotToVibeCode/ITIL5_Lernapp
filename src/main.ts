import { createQuizApp } from './quiz-app';
import './styles.css';

function getElement<T extends HTMLElement>(id: string, constructor: new () => T): T {
  const element = document.getElementById(id);

  if (!(element instanceof constructor)) {
    throw new Error(`Expected element #${id} to exist.`);
  }

  return element;
}

createQuizApp({
  total: getElement('total', HTMLElement),
  current: getElement('current', HTMLElement),
  score: getElement('score', HTMLElement),
  modeLabel: getElement('modeLabel', HTMLElement),
  topic: getElement('topic', HTMLElement),
  question: getElement('question', HTMLElement),
  answers: getElement('answers', HTMLElement),
  feedback: getElement('feedback', HTMLElement),
  bar: getElement('bar', HTMLElement),
  learnButton: getElement('learnBtn', HTMLButtonElement),
  examButton: getElement('examBtn', HTMLButtonElement),
  resetButton: getElement('resetBtn', HTMLButtonElement),
  checkButton: getElement('checkBtn', HTMLButtonElement),
  nextButton: getElement('nextBtn', HTMLButtonElement),
}).init();
