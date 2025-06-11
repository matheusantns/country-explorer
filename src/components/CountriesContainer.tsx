import { Dispatch, JSX, MouseEvent, SetStateAction, useEffect } from 'react';
import CountryItem from './CountryItem';
import { Country } from '@/types/countries';
import { loadFavoriteCountries } from '@/utils/handleLocalStorage';

interface CountriesContainerProps {
  setCountriesList?: Dispatch<SetStateAction<Country[]>>;
  filteredCountries: Country[];
  page?: 'favorites' | 'home';
  toggleFavorite?: (e: MouseEvent<HTMLButtonElement>, countryName: string) => void;
}

/**
 * CountriesContainer component displays a list of countries and manages favorite status if applicable.
 *
 * @param {CountriesContainerProps} props - The props object.
 * @returns {JSX.Element} The rendered component.
 */
export default function CountriesContainer({
  setCountriesList,
  filteredCountries,
  toggleFavorite,
  page = 'home',
}: CountriesContainerProps): JSX.Element {
  useEffect(() => {
    const favorites = loadFavoriteCountries();

    if (favorites.length > 0) {
      const favoriteNamesSet = new Set(favorites.map((fav) => fav.name.official));

      if (setCountriesList) {
        setCountriesList((countries) =>
          countries.map((country) => ({
            ...country,
            favorite: favoriteNamesSet.has(country.name.official),
          }))
        );
      }
    }
  }, []);

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {filteredCountries.map((country) => (
        <CountryItem
          key={country.name.official}
          country={country}
          toggleFavorite={toggleFavorite}
          page={page}
        />
      ))}
    </div>
  );
}
