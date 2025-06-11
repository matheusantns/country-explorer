import { CountriesContext } from '@/contexts/CountriesContext';
import { useContext } from 'react';

/**
 * Custom hook to access the CountriesContext.
 *
 * @throws Will throw an error if used outside of CountriesContextProvider.
 * @returns The value provided by CountriesContext.
 */
export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) throw new Error('useCountries must be used within a CountriesContextProvider');
  return context;
};
