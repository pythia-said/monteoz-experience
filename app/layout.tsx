import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  "https://pythia-said.github.io/monteoz-expierence/",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Monte OZ — The Rebirth",
  description:
    "Ein ruhiges Welterlebnis über Fürsorge, Neugier und den gemeinsamen Neuanfang nach einer globalen Krise.",
  keywords: [
    "Monte OZ",
    "The Rebirth",
    "Welterlebnis",
    "Game Development",
    "Cozy Game",
    "Cloddy Web",
  ],
  authors: [{ name: "Cloddy Web" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Monte OZ — The Rebirth",
    description: "Ein kleiner Hügel. Eine lebendige Welt. Ein Neuanfang.",
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    images: [
      {
        url: new URL("og.png", siteUrl),
        width: 1536,
        height: 1024,
        alt: "Monte OZ — The Rebirth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monte OZ — The Rebirth",
    description: "Ein kleiner Hügel. Eine lebendige Welt. Ein Neuanfang.",
    images: [new URL("og.png", siteUrl)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
