import type { LastScore } from './types';

const LAST_SCORE_KEY = 'itil5-last-score';

export function saveLastScore(score: LastScore): void {
  localStorage.setItem(LAST_SCORE_KEY, JSON.stringify(score));
}
