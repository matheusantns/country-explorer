import { Noto_Color_Emoji } from 'next/font/google';
import { JSX } from 'react';

const notoEmoji = Noto_Color_Emoji({
  subsets: ['emoji'],
  variable: '--font-emoji',
  weight: '400',
});

/**
 * Displays the title section for a country, including its name and emoji flag.
 *
 * @param {{ countryName: string; countryFlag: string }} props - The component props.
 * @param {string} props.countryName - The name of the country to display.
 * @param {string} props.countryFlag - The emoji flag representing the country.
 * @returns {JSX.Element} The rendered title section.
 */
export default function CountryDetailsTitle({
  countryName,
  countryFlag,
}: {
  countryName?: string;
  countryFlag?: string;
}): JSX.Element {
  return (
    <h1 className="mt-5">
      Country details
      <div className="flex align-middle mb-2">
        <span className="block text-3xl font-semibold text-blue-500 mr-2">{countryName}</span>
        <span className={`${notoEmoji.className} text-3xl`}>{countryFlag}</span>
      </div>
    </h1>
  );
}
