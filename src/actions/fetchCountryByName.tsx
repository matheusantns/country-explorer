import { CountryDetails } from '@/types/countries';
import { BASE_URL } from '@/utils/contants';

/**
 * Fetches detailed information about a country by its full name.
 *
 * @param {string} countryName - The full official name of the country to fetch.
 * @returns {Promise<CountryDetails | null>} A promise that resolves to the country details object, or null if not found.
 * @throws {Error} Throws an error if the fetch request fails.
 */
export default async function fetchCountryByName(
  countryName: string
): Promise<CountryDetails | null> {
  const response = await fetch(`${BASE_URL}/name/${countryName}?fullText=true`);

  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }

  const country: CountryDetails[] = await response.json();

  if (!country || country.length === 0) {
    return null;
  }

  return country[0];
}
