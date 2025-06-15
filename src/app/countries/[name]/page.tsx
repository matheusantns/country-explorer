import fetchCountryByName from "@/actions/fetchCountryByName";
import CountryDetailsTitle from "@/components/CountryDetailsTitle";
import CountryInfo from "@/components/CountryInfo";
import Header from "@/components/Header";
import { CountryDetails } from "@/types/countries";
import { BASE_URL } from "@/utils/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JSX } from "react";

interface CountryDetailsProps {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const response = await fetch(`${BASE_URL}/all?fields=name`);
  const countries: Pick<CountryDetails, "name">[] = await response.json();

  return countries.map((country) => ({
    name: country.name.official,
  }));
}

export async function generateMetadata({
  params,
}: CountryDetailsProps): Promise<Metadata> {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  return {
    title: `${decodedName} | Country Explorer`,
  };
}

/**
 * Async React component to render the details page for a specific country.
 *
 * @param {Promise<CountryDetailsProps>} props - A promise resolving to the component props containing route parameters.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.name - The official name of the country to fetch details for.
 * @returns {Promise<JSX.Element>} A promise resolving to the JSX element representing the country details page.
 * @throws Will trigger a notFound response if the country data is not found.
 */
export default async function CountryDetailsPage({
  params,
}: CountryDetailsProps): Promise<JSX.Element> {
  const { name } = await params;
  const country = await fetchCountryByName(name);

  if (!country) return notFound();

  return (
    <main
      className={`
          min-h-screen 
          p-8 
          pb-20 
          font-[family-name:var(--font-geist-mono)]`}
    >
      <Header />
      <CountryDetailsTitle
        countryName={country?.name.official}
        countryFlag={country?.flag}
      />
      <CountryInfo country={country} />
    </main>
  );
}
