import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const baseUrl = host ? new URL(`${protocol}://${host}`) : undefined;

  return {
    metadataBase: baseUrl,
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
    openGraph: {
      title: "Monte OZ — The Rebirth",
      description:
        "Ein kleiner Hügel. Eine lebendige Welt. Ein Neuanfang.",
      type: "website",
      locale: "de_DE",
      images: baseUrl
        ? [
            {
              url: new URL("/og.png", baseUrl),
              width: 1536,
              height: 1024,
              alt: "Monte OZ — The Rebirth",
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: "Monte OZ — The Rebirth",
      description:
        "Ein kleiner Hügel. Eine lebendige Welt. Ein Neuanfang.",
      images: baseUrl ? [new URL("/og.png", baseUrl)] : undefined,
    },
  };
}

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
