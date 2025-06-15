import { Country } from '@/types/countries';
import { FAVORITES_KEY } from './constants';

/**
 * Retrieves the list of favorite countries from localStorage.
 * If the stored value is invalid JSON or doesn't exist, it returns an empty array.
 *
 * @returns {Country[]} An array of favorite countries or an empty array if not found or invalid.
 */
export const getStoredFavorites = (): Country[] => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  try {
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

/**
 * Saves or removes a country from the favorites list in localStorage.
 * If the country has `favorite: true`, it will be added to the list.
 * If `favorite: false`, it will be removed.
 *
 * @param {Country} country - The country to add or remove from favorites.
 */
export const saveFavoriteCountries = (country: Country) => {
  const favorites = getStoredFavorites();

  const filtered = favorites.filter((f) => f.name.official !== country.name.official);
  if (country.favorite) {
    filtered.push(country);
  }

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
};
