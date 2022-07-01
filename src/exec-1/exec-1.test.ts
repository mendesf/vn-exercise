import { isDivisibleBy, printNumbersOrWords, toWord } from './exec-1';

const wordMap = new Map<number, string>();
wordMap.set(3, 'Visual');
wordMap.set(5, 'Nuts');

describe('isDivisibleBy', () => {
  test('given a number and a multiple that are divisible, returns true', () => {
    const num = 27;
    const multiple = 3;
    const result = isDivisibleBy(num, multiple);
    expect(result).toBeTruthy();
  });

  test('given a number and a multiple that are not divisible, returns false', () => {
    const num = 28;
    const multiple = 3;
    const result = isDivisibleBy(num, multiple);
    expect(result).toBeFalsy();
  });

  test('given 0 as the number, returns false', () => {
    const num = 0;
    const multiple = 2;
    const result = isDivisibleBy(num, multiple);
    expect(result).toBeFalsy();
  });

  test('given 0 as the multiple, returns false', () => {
    const num = 2;
    const multiple = 0;
    const result = isDivisibleBy(num, multiple);
    expect(result).toBeFalsy();
  });
});

describe('toWord', () => {
  test('given a number and a word map, returns the respective word when the number is on the map', () => {
    const num = 3;
    const result = toWord(num, wordMap);
    expect(result).toBe(wordMap.get(num));
  });

  test('given a number and a word map, returns the number when it is not on the map', () => {
    const num = 4;
    const result = toWord(num, wordMap);
    expect(result).toBe('4');
  });
});

describe('printNumbersOrWords', () => {
  test('given a range of numbers and a word map, prints the numbers or the respective words', () => {
    const logs: string[] = [];
    const loggerMock = {
      log: (message: string) => logs.push(message),
    };
    const from = 1;
    const to = 100;
    const expectedResult = [
      '1',
      '2',
      'Visual',
      '4',
      'Nuts',
      'Visual',
      '7',
      '8',
      'Visual',
      'Nuts',
      '11',
      'Visual',
      '13',
      '14',
      'Visual Nuts',
      '16',
      '17',
      'Visual',
      '19',
      'Nuts',
      'Visual',
      '22',
      '23',
      'Visual',
      'Nuts',
      '26',
      'Visual',
      '28',
      '29',
      'Visual Nuts',
      '31',
      '32',
      'Visual',
      '34',
      'Nuts',
      'Visual',
      '37',
      '38',
      'Visual',
      'Nuts',
      '41',
      'Visual',
      '43',
      '44',
      'Visual Nuts',
      '46',
      '47',
      'Visual',
      '49',
      'Nuts',
      'Visual',
      '52',
      '53',
      'Visual',
      'Nuts',
      '56',
      'Visual',
      '58',
      '59',
      'Visual Nuts',
      '61',
      '62',
      'Visual',
      '64',
      'Nuts',
      'Visual',
      '67',
      '68',
      'Visual',
      'Nuts',
      '71',
      'Visual',
      '73',
      '74',
      'Visual Nuts',
      '76',
      '77',
      'Visual',
      '79',
      'Nuts',
      'Visual',
      '82',
      '83',
      'Visual',
      'Nuts',
      '86',
      'Visual',
      '88',
      '89',
      'Visual Nuts',
      '91',
      '92',
      'Visual',
      '94',
      'Nuts',
      'Visual',
      '97',
      '98',
      'Visual',
      'Nuts',
    ];

    const printTo = printNumbersOrWords(from, to, wordMap);
    printTo(console);
    printTo(loggerMock);

    expect(logs).toEqual(expectedResult);
  });
});
