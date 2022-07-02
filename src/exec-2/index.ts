import { Country, summarizeCountryData } from './exec-2';

const countries: Country[] = [
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

console.log(JSON.stringify(summarizeCountryData(countries), undefined, 2));
