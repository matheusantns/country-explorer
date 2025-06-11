import Link from 'next/link';
import { JSX } from 'react';

/**
 * Header component with navigation links to Home, Favorites, and Random pages.
 *
 * @returns {JSX.Element} The rendered header navigation.
 */
export default function Header(): JSX.Element {
  return (
    <header className="flex gap-3 text-blue-500 underline underline-offset-3">
      <Link href={'/'}>Home</Link>
      <Link href={'/favorites'}>Favorites</Link>
      <Link href={'/random'}>Random</Link>
    </header>
  );
}
