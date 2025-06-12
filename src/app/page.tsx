import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CountriesContainerContext from '@/components/CountriesContainerContext';
import { CountriesContextProvider } from '@/contexts/CountriesContextProvider';
import { JSX } from 'react';
import { Metadata } from 'next';
import fetchAllCountries from '@/actions/fetchAllCountries';

export const metadata: Metadata = {
  title: 'Home | Country Explorer',
};

/**
 * Home page component that fetches all countries and provides them via context.
 *
 * @async
 * @function
 * @returns {Promise<JSX.Element>} The rendered home page with countries data.
 */
export default async function Home(): Promise<JSX.Element> {
  const countries = await fetchAllCountries();

  return (
    <>
      <CountriesContextProvider initialCountries={countries}>
        <main
          className={`
        min-h-screen 
        p-8 
        pb-20 
        font-[family-name:var(--font-geist-mono)]`}
        >
          <Header />
          <h1 className="mt-5">
            Welcome to the
            <span className="block text-3xl font-semibold text-blue-500">Counter Explorer</span>
          </h1>
          <SearchBar />
          <CountriesContainerContext />
        </main>
      </CountriesContextProvider>
    </>
  );
}
