import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { BASE_URL } from "@/utils/contants";
import { Country } from "@/types/countries";
import CountriesContainerContext from "@/components/CountriesContainerContext";
import { CountriesContextProvider } from "@/contexts/CountriesContextProvider";
import { JSX } from "react";
import Head from "next/head";

interface HomeProps {
  countries: Country[];
}

/**
 * Home page component that wraps content in CountriesContextProvider.
 *
 * @param {Object} props - Component props.
 * @param {Country[]} props.countries - Initial list of countries.
 * @returns {JSX.Element} The home page content.
 */
export default function Home({ countries }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Country Explorer</title>
        <meta name="description" content="Explore countries around the world" />
      </Head>
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
            <span className="block text-3xl font-semibold text-blue-500">
              Counter Explorer
            </span>
          </h1>
          <SearchBar />
          <CountriesContainerContext />
        </main>
      </CountriesContextProvider>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${BASE_URL}/all?fields=name,region,flag`);
  const countries = await response.json();

  const processedCountries = countries.map((item: Country) => ({
    ...item,
    favorite: false,
  }));

  return { props: { countries: processedCountries } };
};
