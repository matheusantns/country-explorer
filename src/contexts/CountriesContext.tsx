import { Country } from '@/types/countries';
import { Regions } from '@/types/regions';
import { createContext, Dispatch, MouseEvent, SetStateAction } from 'react';

export type CountriesContextType = {
  countriesList: Country[];
  filteredCountries: Country[];
  favoriteCountries: Country[];
  setCountriesList: Dispatch<SetStateAction<Country[]>>;
  toggleFavorite: (e: MouseEvent<HTMLButtonElement>, countryOfficialName: string) => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<Regions | 'all'>>;
};

export const CountriesContext = createContext<CountriesContextType | undefined>(undefined);
