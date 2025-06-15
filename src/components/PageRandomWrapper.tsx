'use client';

import { CountryDetails } from '@/types/countries';
import { JSX, useEffect } from 'react';
import CountryDetailsTitle from './CountryDetailsTitle';
import CountryInfo from './CountryInfo';

/**
 * Wrapper component that displays details for a random country.
 * Updates the document title based on the country's name.
 *
 * @param {Object} props - Component props.
 * @param {CountryDetails} [props.country] - Optional country details to display.
 * @returns {JSX.Element} The rendered country details or a loading message.
 */
export default function PageRandomWrapper({ country }: { country?: CountryDetails }): JSX.Element {
  useEffect(() => {
    document.title = `${country?.name.official} | Country Explorer`;
  }, [country?.name.official]);

  return (
    <>
      {country ? (
        <>
          <CountryDetailsTitle countryName={country.name.official} countryFlag={country.flag} />
          <CountryInfo country={country} />
        </>
      ) : (
        <p className="pt-8 font-[family-name:var(--font-geist-mono)]">Loading random country...</p>
      )}
    </>
  );
}
