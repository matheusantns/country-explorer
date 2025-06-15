'use client';

import { JSX, useEffect, useState } from 'react';
import CountriesContainer from './CountriesContainer';
import { Country } from '@/types/countries';
import { getStoredFavorites } from '@/utils/handleLocalStorage';

/**
 * Wrapper component for displaying favorite countries.
 * Loads favorite countries from localStorage on mount.
 *
 * @returns {JSX.Element} A list of favorite countries or a fallback message.
 */
export default function PageFavoritesWrapper(): JSX.Element {
  const [favorites, setFavorites] = useState<Country[]>([]);

  useEffect(() => {
    setFavorites(getStoredFavorites());
  }, []);

  return (
    <>
      {favorites.length > 0 ? (
        <CountriesContainer page="favorites" filteredCountries={favorites} />
      ) : (
        <span className="block mt-2 text-sm">No favorite countries to display 😫</span>
      )}
    </>
  );
}
