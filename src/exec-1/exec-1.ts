type Logger = Readonly<{
  log(message: string): void;
}>;

export const isDivisibleBy = (num: number, multiple: number) =>
  num > 0 && num % multiple === 0;

export const toWord = (num: number, wordMap: Map<number, string>): string => {
  const words = Array.from(wordMap.entries())
    .filter(([multiple]) => isDivisibleBy(num, Number(multiple)))
    .map(([_, word]) => word);

  if (words.length > 0) return words.join(' ');

  return num.toString();
};

export const printNumbersOrWords =
  (from: number, to: number, wordMap: Map<number, string>) =>
  (logger: Logger) => {
    for (let n = from; n <= to; n++) {
      const word = toWord(n, wordMap);
      logger.log(word);
    }
  };
