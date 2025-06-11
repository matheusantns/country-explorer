import { CountryDetails } from '@/types/countries';
import { JSX } from 'react';

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
        <li>
          Population:{' '}
          {country.population
            ? new Intl.NumberFormat('en-US').format(country.population)
            : 'Not found'}
        </li>
        <li>
          Languages: {country.languages ? Object.values(country.languages).join(', ') : 'Not found'}
        </li>
        <li>
          Currencies:
          {country.currencies
            ? Object.entries(country.currencies)
                .map(([code, { name, symbol }]) => `${code} - ${name} (${symbol})`)
                .join(', ')
            : 'Not found'}
        </li>
      </ul>
    </section>
  );
}
