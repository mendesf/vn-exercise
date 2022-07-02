import {
  countLanguages,
  Country,
  mostCommonLanguages,
  summarizeCountryData,
  withMostLanguages,
  withMostLanguagesIncluding,
} from './exec-2';

const makeCountriesList = (): Country[] => [
  {
    country: 'US',
    languages: ['en'],
  },
  {
    country: 'BE',
    languages: ['nl', 'fr', 'de'],
  },
  {
    country: 'NL',
    languages: ['nl'],
  },
  {
    country: 'DE',
    languages: ['de'],
  },
  {
    country: 'ES',
    languages: ['es'],
  },
  {
    country: 'CH',
    languages: ['de', 'fr', 'it', 'ch'],
  },
];

describe('withMostLanguages', () => {
  test('given a list of countries, returns those with most languages', () => {
    const expectedResult = [
      {
        country: 'CH',
        languages: ['de', 'fr', 'it', 'ch'],
      },
    ];
    const result = withMostLanguages(makeCountriesList());
    expect(result).toEqual(expectedResult);
  });
});

describe('withMostLanguagesIncluding', () => {
  test('given a list of countries, returns the countries with the most languages one of them being Dutch (nl)', () => {
    const expectedResult = [
      {
        country: 'BE',
        languages: ['nl', 'fr', 'de'],
      },
    ];
    const result = withMostLanguagesIncluding('nl')(makeCountriesList());
    expect(result).toEqual(expectedResult);
  });
});

describe('countLanguages', () => {
  test('given a list of countries, returns the count of languages', () => {
    const expectedResult = 7;
    const result = countLanguages(makeCountriesList());
    expect(result).toBe(expectedResult);
  });
});

describe('mostCommonLanguage', () => {
  test('given a list of countries, returns the most common languages', () => {
    const expectedResult = ['de'];
    const result = mostCommonLanguages(makeCountriesList());
    expect(result).toEqual(expectedResult);
  });
});

describe('summarizeCountryData', () => {
  test('given a list of countries, returns a summary of country data', () => {
    const expectedResult = {
      count: { countries: 6, languages: 7 },
      mostCommonLanguage: ['de'],
      withMostLanguages: {
        overall: [{ country: 'CH', languages: ['de', 'fr', 'it', 'ch'] }],
        whereGermanIsSpoken: [
          { country: 'CH', languages: ['de', 'fr', 'it', 'ch'] },
        ],
      },
    };
    const result = summarizeCountryData(makeCountriesList());
    expect(result).toEqual(expectedResult);
  });
});
