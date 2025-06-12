import { Geist_Mono, Noto_Color_Emoji } from 'next/font/google';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoEmoji = Noto_Color_Emoji({
  subsets: ['emoji'],
  variable: '--font-emoji',
  weight: '400',
});

export default function NotFound() {
  return (
    <main
      className={`${geistMono.className} 
      flex
      align-middle
      justify-center
      h-screen
      flex-col
    `}
    >
      <h1 className="mt-5 self-center">
        <span className="block text-4xl font-semibold text-red-400">404</span>
        Country not found.
        <span className={`${notoEmoji.className} block text-4xl mt-1`}>🇧🇷🇵🇱🇺🇦🇦🇷</span>
      </h1>
    </main>
  );
}
