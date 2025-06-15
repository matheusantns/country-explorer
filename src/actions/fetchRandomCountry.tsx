import { Country, CountryDetails } from '@/types/countries';
import { BASE_URL } from '@/utils/constants';

/**
 * Fetches a random country's detailed information.
 *
 * @returns {Promise<CountryDetails>} A promise that resolves to the details of a randomly selected country.
 * @throws {Error} Throws an error if fetching the country list or the country details fails.
 */
export default async function fetchRandomCountry(): Promise<CountryDetails | null> {
  const response = await fetch(`${BASE_URL}/all?fields=name`, { cache: 'no-store' });
  const countryList = (await response.json()) as Pick<Country, 'name'>[];

  if (!response.ok) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * countryList.length);
  const randomName = countryList[randomIndex].name.official;

  const res = await fetch(`${BASE_URL}/name/${randomName}?fullText=true`);

  if (!res.ok) {
    return null;
  }

  const data: CountryDetails[] = await res.json();

  return data[0];
}
