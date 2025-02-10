import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
