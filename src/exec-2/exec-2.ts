export type Country = Readonly<{
  country: string;
  languages: string[];
}>;

type CountMap<Value> = {
  map: { [x: string]: Value };
  max: number;
};

type CountriesSummary = {
  withMostLanguages: {
    overall: Country[];
    whereGermanIsSpoken: Country[];
  };
  mostCommonLanguage: string[];
  count: {
    countries: number;
    languages: number;
  };
};

export const withMostLanguages = (countries: Country[]): Country[] => {
  const { map, max } = countries.reduce<CountMap<number[]>>(
    ({ map, max }, country, i) => {
      const count = country.languages.length;
      const indexes = map[count] || [];
      return {
        map: { ...map, [count]: indexes.concat(i) },
        max: Math.max(count, max),
      };
    },
    { map: {}, max: 0 },
  );

  return Object.entries(map)
    .filter(([count, _]) => Number(count) === max)
    .flatMap(([_, indexes]) => indexes.map((i) => countries[i]));
};

export const withMostLanguagesIncluding =
  (language: string) =>
  (countries: Country[]): Country[] => {
    const filtered = countries.filter((country) =>
      country.languages.includes(language),
    );
    return withMostLanguages(filtered);
  };

export const countLanguages = (countries: Country[]): number =>
  countries
    .flatMap((country) => country.languages)
    .reduce((languages, language) => languages.add(language), new Set<string>())
    .size;

export const mostCommonLanguages = (countries: Country[]): string[] => {
  const { map, max } = countries
    .flatMap((country) => country.languages)
    .reduce<CountMap<number>>(
      ({ map, max }, lang) => {
        const count = 1 + (map[lang] || 0);
        return {
          map: { ...map, [lang]: count },
          max: Math.max(count, max),
        };
      },
      { map: {}, max: 0 },
    );

  return Object.entries(map)
    .filter(([_, count]) => count === max)
    .map(([language]) => language);
};

export const summarizeCountryData = (
  countries: Country[],
): CountriesSummary => ({
  count: {
    countries: countries.length,
    languages: countLanguages(countries),
  },
  withMostLanguages: {
    overall: withMostLanguages(countries),
    whereGermanIsSpoken: withMostLanguagesIncluding('de')(countries),
  },
  mostCommonLanguage: mostCommonLanguages(countries),
});
