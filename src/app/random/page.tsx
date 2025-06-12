import { JSX } from 'react';
import Header from '@/components/Header';

import { Metadata } from 'next';
import fetchRandomCountry from '@/actions/fetchRandomCountry';
import PageRandomWrapper from '@/components/PageRandomWrapper';

export const metadata: Metadata = {
  title: 'Random | Country Explorer',
};

/**
 * RandomCountryPage component fetches and displays a random country's details.
 *
 * @async
 * @function
 * @returns {Promise<JSX.Element>} The rendered page with random country data.
 */
export default async function RandomCountryPage(): Promise<JSX.Element> {
  const country = await fetchRandomCountry();

  return (
    <>
      <main
        className={`
        min-h-screen 
        p-8 
        pb-20 
        font-[family-name:var(--font-geist-mono)]`}
      >
        <Header />
        <PageRandomWrapper country={country} />
      </main>
    </>
  );
}
