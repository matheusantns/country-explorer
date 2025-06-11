import { Country } from '@/types/countries';

export const saveFavoriteCountries = (country: Country) => {
  const stored = localStorage.getItem('favorites');
  const favorites: Country[] = stored ? JSON.parse(stored) : [];

  const updatedFavorites = country.favorite
    ? [...favorites.filter((f) => f.name.official !== country.name.official), country]
    : favorites.filter((f) => f.name.official !== country.name.official);

  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const loadFavoriteCountries = () => {
  const stored = localStorage.getItem('favorites');
  return stored ? (JSON.parse(stored) as Country[]) : ([] as Country[]);
};
