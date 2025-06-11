import CountriesContainer from '@/components/CountriesContainer';
import Header from '@/components/Header';
import { Country } from '@/types/countries';
import { loadFavoriteCountries } from '@/utils/handleLocalStorage';
import { Geist_Mono } from 'next/font/google';
import { JSX, useEffect, useState } from 'react';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/**
 * Page component that displays a list of favorite countries.
 *
 * @returns {JSX.Element} The favorites page with a list or message.
 */
export default function FavoritesPage(): JSX.Element {
  const [favorites, setFavorites] = useState<Country[]>([]);

  useEffect(() => {
    setFavorites(loadFavoriteCountries());
  }, []);

  return (
    <div
      className={`
          ${geistMono.className} 
          min-h-screen 
          p-8 
          pb-20 
          font-[family-name:var(--font-geist-mono)]`}
    >
      <Header />
      <h1 className="mt-5">
        Your country
        <span className="block text-3xl font-semibold text-blue-500">Favorites</span>
      </h1>
      {favorites.length > 0 ? (
        <CountriesContainer page="favorites" filteredCountries={favorites} />
      ) : (
        <span className="block mt-2 text-sm">No favorite countries to display 😫</span>
      )}
    </div>
  );
}
