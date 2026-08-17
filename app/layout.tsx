import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahinislamakofte.vercel.app"),
  title: "Şahin Islama Köfte – Sapanca'nın Efsanesi | Hasanpaşa, Sapanca",
  description:
    "Sapanca Hasanpaşa'da efsane ıslama köfte, kuzu pirzola, piyaz ve ev yapımı tatlılar. 1.411 Google yorumu, 4,5 puan. Her gün 11:00–22:00. Yemek salonu, arabaya servis ve temassız teslimat.",
  keywords: [
    "ıslama köfte",
    "Sapanca köfte",
    "Şahin Islama Köfte",
    "Hasanpaşa restoran",
    "kuzu pirzola",
    "revani",
    "kabak tatlısı",
    "Sakarya köfte",
  ],
  openGraph: {
    title: "Şahin Islama Köfte – Sapanca'nın Efsanesi",
    description:
      "1.411 Google yorumu ve 4,5 puanla Sapanca'nın efsanevi ıslama köfte adresi. Hasanpaşa, Sapanca.",
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${oswald.variable} ${sourceSans.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
