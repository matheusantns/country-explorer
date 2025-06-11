import CountryDetailsTitle from "@/components/CountryDetailsTitle";
import CountryInfo from "@/components/CountryInfo";
import Header from "@/components/Header";
import { CountryDetails } from "@/types/countries";
import { BASE_URL } from "@/utils/contants";
import Head from "next/head";
import { JSX } from "react";

interface CountryDetailsProps {
  country: CountryDetails;
}

/**
 * Page component that displays detailed information about a country.
 *
 * @param {CountryDetailsProps} props - Component props.
 * @param {CountryDetails} props.country - The detailed country data.
 * @returns {JSX.Element} The country details page.
 */
export default function CountryDetailsPage({
  country,
}: CountryDetailsProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{country.name.common} | Country Explorer</title>
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

        <CountryDetailsTitle
          countryName={country.name.official}
          countryFlag={country.flag}
        />
        <CountryInfo country={country} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${BASE_URL}/all?fields=name`);
  const countries: Pick<CountryDetails, "name">[] = await response.json();
  const paths = countries.map((country) => ({
    params: { name: country.name.official },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const response = await fetch(`${BASE_URL}/name/${params.name}?fullText=true`);
  const country: CountryDetails[] = await response.json();

  if (!country || country.length === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { country: country[0] } };
}
