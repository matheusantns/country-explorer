import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={geistMono.className} />;
}
