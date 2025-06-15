import { CountryDetails } from '@/types/countries';
import { JSX } from 'react';

/**
 * Formats the currencies object into a human-readable string.
 *
 * @param {CountryDetails['currencies']} currencies - The currencies object.
 * @returns {string} Formatted string of currencies.
 */
function formatCurrencies(currencies: CountryDetails['currencies']): string {
  if (!currencies) return 'Not found';

  return Object.entries(currencies)
    .map(([code, { name, symbol }]) => `${code} - ${name} (${symbol})`)
    .join(', ');
}

/**
 * Formats the languages object into a human-readable string.
 *
 * @param {CountryDetails['languages']} languages - The languages object.
 * @returns {string} Formatted string of languages.
 */
function formatLanguages(languages: CountryDetails['languages']): string {
  if (!languages) return 'Not found';

  return Object.values(languages).join(', ');
}

/**
 * Formats the population number.
 *
 * @param {CountryDetails['population']} population - The population number.
 * @returns {string} Formatted number of population.
 */
function formatPopulation(population: CountryDetails['population']): string {
  if (!population) return 'Not found';

  return new Intl.NumberFormat('en-US').format(population);
}

/**
 * Displays detailed information about a country.
 *
 * @param {{ country: CountryDetails }} props - The component props.
 * @param {CountryDetails} props.country - The country data to display.
 * @returns {JSX.Element} The rendered country details section.
 */
export default function CountryInfo({ country }: { country: CountryDetails }): JSX.Element {
  return (
    <section>
      <span className="font-bold">Details</span>
      <ul className="text-sm dark:text-gray-300">
        <li>Capital: {country.capital ?? 'Not found'}</li>
        <li>Region: {country.region ?? 'Not found'}</li>
        <li>Population: {formatPopulation(country.population)}</li>
        <li>Languages: {formatLanguages(country.languages)}</li>
        <li>Currencies: {formatCurrencies(country.currencies)}</li>
      </ul>
    </section>
  );
}
