import Header from '@/components/Header';
import PageFavoritesWrapper from '@/components/PageFavoritesWrapper';
import { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { JSX } from 'react';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Favorites | Country Explorer',
};

/**
 * FavoritesPage component renders the user's favorite countries page.
 *
 * @returns {JSX.Element} The rendered favorites page JSX element.
 */
export default function FavoritesPage(): JSX.Element {
  return (
    <>
      <div
        className={`
          ${geistMono.className} 
          min-h-screen 
          p-8 
          pb-20 
          font-[family-name:var(--font-geist-mono)]`}
      >
        <Header />
        <h1 className="mt-5">
          Your country
          <span className="block text-3xl font-semibold text-blue-500">Favorites</span>
        </h1>
        <PageFavoritesWrapper />
      </div>
    </>
  );
}
