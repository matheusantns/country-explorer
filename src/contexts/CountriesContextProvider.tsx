'use client';

import { Country } from '@/types/countries';
import { Regions } from '@/types/regions';
import { saveFavoriteCountries } from '@/utils/handleLocalStorage';
import { JSX, MouseEvent, ReactNode, useCallback, useMemo, useState } from 'react';
import { CountriesContext } from './CountriesContext';

/**
 * Provides country data and state management via context.
 *
 * @param {{ children: ReactNode; initialCountries: Country[] }} props - The component props.
 * @param {ReactNode} props.children - The child components wrapped by the provider.
 * @param {Country[]} props.initialCountries - Initial list of countries.
 * @returns {JSX.Element} The context provider with country state and handlers.
 */
export const CountriesContextProvider = ({
  children,
  initialCountries,
}: {
  children: ReactNode;
  initialCountries: Country[];
}): JSX.Element => {
  const [countriesList, setCountriesList] = useState<Country[]>(initialCountries);
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Regions | 'all'>('all');

  const filteredCountries = useMemo(() => {
    return countriesList.filter((country) => {
      const nameMatches =
        search === '' || country.name.official.toLowerCase().includes(search.toLowerCase());

      const regionMatches = selectedRegion === 'all' || country.region === selectedRegion;

      return nameMatches && regionMatches;
    });
  }, [countriesList, search, selectedRegion]);

  const toggleFavorite = useCallback(
    (e: MouseEvent<HTMLButtonElement>, countryOfficialName: string) => {
      e.preventDefault();
      e.stopPropagation();

      setCountriesList((countries) =>
        countries.map((country) => {
          if (country.name.official === countryOfficialName) {
            saveFavoriteCountries({ ...country, favorite: !country.favorite });
            return { ...country, favorite: !country.favorite };
          }

          return country;
        })
      );
    },
    []
  );

  const favoriteCountries = useMemo(() => {
    return countriesList.filter((country) => country.favorite === true);
  }, [countriesList]);

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        setCountriesList,
        toggleFavorite,
        search,
        setSearch,
        selectedRegion,
        setSelectedRegion,
        filteredCountries,
        favoriteCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
