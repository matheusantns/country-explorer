'use client';

import { CountryDetails } from '@/types/countries';
import { useEffect } from 'react';
import CountryDetailsTitle from './CountryDetailsTitle';
import CountryInfo from './CountryInfo';

export default function PageRandomWrapper({ country }: { country?: CountryDetails }) {
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
