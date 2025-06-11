import { Country } from '@/types/countries';
import { Noto_Color_Emoji } from 'next/font/google';
import Link from 'next/link';
import { JSX, MouseEvent } from 'react';

interface CountryItemProps {
  page: 'home' | 'favorites';
  country: Country;
  toggleFavorite?: (e: MouseEvent<HTMLButtonElement>, countryName: string) => void;
}

const notoEmoji = Noto_Color_Emoji({
  subsets: ['emoji'],
  variable: '--font-emoji',
  weight: '400',
});

/**
 * Displays a clickable country card with its flag, name, and region.
 * Includes a favorite toggle button on the 'home' page.
 *
 * @param {CountryItemProps} props - The component props.
 * @param {'home' | 'favorites'} props.page - Current page context affecting UI behavior.
 * @param {Country} props.country - The country data to display.
 * @param {(e: MouseEvent<HTMLButtonElement>, countryName: string) => void} [props.toggleFavorite] - Optional handler to toggle the favorite status.
 * @returns {JSX.Element} The rendered country item card.
 */
export default function CountryItem({
  country,
  toggleFavorite,
  page,
}: CountryItemProps): JSX.Element {
  return (
    <Link className="z-0" href={`/countries/${country.name.official}`} key={country.name.common}>
      <article className="border border-gray-700 rounded-lg w-48 h-48 p-3">
        <div className="flex justify-between">
          <span className={`${notoEmoji.className} text-2xl`}>{country.flag}</span>
          {page === 'home' && (
            <button
              type="button"
              className={`z-10 cursor-pointer text-gray-400 transition 
              ${country.favorite ? 'opacity-100 filter-none' : 'opacity-50 grayscale'}`}
              onClick={(e) => toggleFavorite && toggleFavorite(e, country.name.official)}
            >
              ❤️
            </button>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-2">Name</p>
        <h2>{country.name.common}</h2>
        <p className="text-xs text-gray-500">Region</p>
        <p>{country.region}</p>
      </article>
    </Link>
  );
}
