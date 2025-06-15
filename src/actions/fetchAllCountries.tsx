import { Country } from '@/types/countries';
import { BASE_URL } from '@/utils/constants';

/**
 * Fetches a list of countries with limited fields and adds a `favorite` property.
 *
 * @returns {Promise<Country[]>} A promise that resolves to an array of Country objects, each including a `favorite` boolean.
 * @throws {Error} Throws an error if the fetch request fails.
 */
export default async function fetchAllCountries(): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/all?fields=name,region,flag`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }

  const countries = await response.json();

  return countries.map((item: Country) => ({
    ...item,
    favorite: false,
  })) as Country[];
}
