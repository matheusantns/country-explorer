import { Country, CountryDetails } from '@/types/countries';
import { BASE_URL } from '@/utils/contants';

/**
 * Fetches a random country's detailed information.
 *
 * @returns {Promise<CountryDetails>} A promise that resolves to the details of a randomly selected country.
 * @throws {Error} Throws an error if fetching the country list or the country details fails.
 */
export default async function fetchRandomCountry(): Promise<CountryDetails> {
  const response = await fetch(`${BASE_URL}/all?fields=name`, { cache: 'no-store' });
  const countryList = (await response.json()) as Pick<Country, 'name'>[];

  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }

  const randomIndex = Math.floor(Math.random() * countryList.length);
  const randomName = countryList[randomIndex].name.official;

  const res = await fetch(`${BASE_URL}/name/${randomName}?fullText=true`);
  if (!res.ok) {
    throw new Error('Failed to fetch country details');
  }

  const data: CountryDetails[] = await res.json();

  return data[0];
}
