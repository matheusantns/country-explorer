import { JSX } from 'react';
import CountryDetailsTitle from '@/components/CountryDetailsTitle';
import CountryInfo from '@/components/CountryInfo';
import Header from '@/components/Header';
import { Country, CountryDetails } from '@/types/countries';
import { BASE_URL } from '@/utils/constants';
import Head from 'next/head';

export const getServerSideProps = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all?fields=name`);
    const countryList = (await response.json()) as Pick<Country, 'name'>[];

    const randomIndex = Math.floor(Math.random() * countryList.length);
    const randomName = countryList[randomIndex].name.official;

    const detailsResponse = await fetch(`${BASE_URL}/name/${randomName}?fullText=true`);
    const data: CountryDetails[] = await detailsResponse.json();

    return { props: { country: data[0] } };
  } catch (error) {
    console.error('Error fetching random country:', error);
    return { notFound: true };
  }
};

/**
 * Page component that displays the details of a randomly selected country.
 *
 * @param {Object} props - Component props.
 * @param {CountryDetails} props.country - The full details of the randomly selected country.
 * @returns {JSX.Element} The rendered random country details page.
 */
export default function RandomCountryPage({ country }: { country: CountryDetails }): JSX.Element {
  return (
    <>
      <Head>
        <title>{`${country?.name.common} | Country Explorer`}</title>
        <meta name="description" content="Explore countries around the world" />
      </Head>
      <main
        className={`
        min-h-screen 
        p-8 
        pb-20 
        font-[family-name:var(--font-geist-mono)]`}
      >
        <Header />
        <CountryDetailsTitle countryName={country.name.official} countryFlag={country.flag} />
        <CountryInfo country={country} />
      </main>
    </>
  );
}
