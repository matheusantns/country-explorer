'use client';

import { useEffect, useState } from 'react';
import CountriesContainer from './CountriesContainer';
import { Country } from '@/types/countries';
import { loadFavoriteCountries } from '@/utils/handleLocalStorage';

export default function PageFavoritesWrapper() {
  const [favorites, setFavorites] = useState<Country[]>([]);

  useEffect(() => {
    setFavorites(loadFavoriteCountries());
  }, []);

  return (
    <>
      {favorites.length > 0 ? (
        <>
          <CountriesContainer page="favorites" filteredCountries={favorites} />
        </>
      ) : (
        <span className="block mt-2 text-sm">No favorite countries to display 😫</span>
      )}
    </>
  );
}
