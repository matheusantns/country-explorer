'use client';

import { useCountries } from '@/hooks/useCountriesContext';
import { Regions } from '@/types/regions';
import { JSX } from 'react';

const selectOptions = ['Africa', 'Asia', 'Oceania', 'Europe', 'Americas', 'Antarctic'];

/**
 * Dropdown select to filter countries by region.
 *
 * @returns {JSX.Element} The rendered region selection dropdown.
 */
export default function SelectRegion(): JSX.Element {
  const { setSelectedRegion, selectedRegion } = useCountries();

  return (
    <div className="dark:bg-gray-800 rounded-md">
      <select
        name="region"
        id="region"
        aria-label="Select a region to filter"
        className="dark:bg-gray-800 dark:text-white p-2 rounded-md dark:outline-none dark:border-0 border border-gray-500"
        onChange={(e) => setSelectedRegion(e.target.value as Regions)}
        value={selectedRegion}
      >
        <option value="all">Select a region</option>
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
