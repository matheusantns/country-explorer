'use client';

import { CircleX } from 'lucide-react';
import SelectRegion from './SelectRegion';
import { useCountries } from '@/hooks/useCountriesContext';
import { JSX } from 'react';

/**
 * SearchBar component with an input to search countries,
 * a region selector, and a button to clear filters.
 *
 * @returns {JSX.Element} The rendered search bar UI.
 */
export default function SearchBar(): JSX.Element {
  const { search, setSearch, setSelectedRegion } = useCountries();

  const handleClearFilters = () => {
    setSearch('');
    setSelectedRegion('all');
  };

  return (
    <div className="flex gap-2 align-middle mt-5">
      <input
        placeholder="Search for a country..."
        className="dark:bg-gray-800 dark:border-0 border border-gray-500 rounded-md w-[30vw] p-2"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <SelectRegion />
      <button
        className="flex gap-2 cursor-pointer dark:bg-gray-800 dark:border-0 border border-gray-500 p-2 rounded-md"
        type="button"
        onClick={handleClearFilters}
      >
        <CircleX /> <span>Clear filters</span>
      </button>
    </div>
  );
}
