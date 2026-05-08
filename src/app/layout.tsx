import type { Metadata } from "next";
import "./globals.css";
//og:img url =public/favicon.png
export const metadata: Metadata = {
  title: "CATCHY99 — Sneakers & Streetwear",
  description:
    "Premium sneakers and NBA streetwear. Shop the freshest kicks at CATCHY99.",
  openGraph: {
    title: "CATCHY99 — Sneakers & Streetwear",
    description:
      "Premium sneakers and NBA streetwear. Shop the freshest kicks at CATCHY99.",
    url: "https://catchy99.vercel.app",
    images: [
      {
        url: "https://catchy99.vercel.app/favicon.png",
        width: 1200,
        height: 630,
        alt: "CATCHY99 Sneakers & Streetwear",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
