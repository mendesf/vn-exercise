import { printNumbersOrWords } from './exec-1';

const from = 1;
const to = 100;
const wordMap = new Map<number, string>();
wordMap.set(3, 'Visual');
wordMap.set(5, 'Nuts');

printNumbersOrWords(from, to, wordMap)(console);
