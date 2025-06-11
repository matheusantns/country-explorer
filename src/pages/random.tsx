import { JSX, useEffect, useState } from "react";
import CountryDetailsTitle from "@/components/CountryDetailsTitle";
import CountryInfo from "@/components/CountryInfo";
import Header from "@/components/Header";
import { Country, CountryDetails } from "@/types/countries";
import { BASE_URL } from "@/utils/contants";
import Head from "next/head";

/**
 * Page component that fetches and displays a random country's details.
 *
 * @param {Object} props - Component props.
 * @param {Pick<Country, 'name'>[]} props.countryList - List of countries with only their names.
 * @returns {JSX.Element} The random country details page.
 */
export default function RandomCountryPage({
  countryList,
}: {
  countryList: Pick<Country, "name">[];
}): JSX.Element {
  const [country, setCountry] = useState<CountryDetails | null>(null);

  useEffect(() => {
    async function fetchRandomCountry() {
      const randomIndex = Math.floor(Math.random() * countryList.length);
      const randomName = countryList[randomIndex].name.official;

      try {
        const res = await fetch(`${BASE_URL}/name/${randomName}?fullText=true`);
        const data: CountryDetails[] = await res.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    }

    fetchRandomCountry();
  }, [countryList]);

  return (
    <>
      <Head>
        <title>{country?.name.common} | Country Explorer</title>
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
        {country ? (
          <>
            <CountryDetailsTitle
              countryName={country.name.official}
              countryFlag={country.flag}
            />
            <CountryInfo country={country} />
          </>
        ) : (
          <p className="pt-8 font-[family-name:var(--font-geist-mono)]">
            Loading random country...
          </p>
        )}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${BASE_URL}/all?fields=name`);
  const countryList = (await response.json()) as Pick<Country, "name">[];

  return { props: { countryList } };
};
