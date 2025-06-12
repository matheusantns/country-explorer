'use client';

import { JSX } from 'react';
import CountriesContainer from './CountriesContainer';
import { useCountries } from '@/hooks/useCountriesContext';

/**
 * Wrapper component that provides countries-related context data
 * to the CountriesContainer component.
 *
 * @returns {JSX.Element} The rendered CountriesContainer with context values.
 */
export default function CountriesContainerContext(): JSX.Element {
  const { setCountriesList, filteredCountries, toggleFavorite } = useCountries();

  return (
    <>
      <CountriesContainer
        setCountriesList={setCountriesList}
        filteredCountries={filteredCountries}
        toggleFavorite={toggleFavorite}
      />
    </>
  );
}
