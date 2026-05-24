import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600"],
});

const siteDescription =
  "Open-source organization building AI-based software products, including Neurons—an AI agent marketplace for the web.";

export const metadata: Metadata = {
  metadataBase: new URL("https://neuroworklabs.com"),
  title: "Neurowork Labs",
  description: siteDescription,
  openGraph: {
    title: "Neurowork Labs",
    description: siteDescription,
    url: "/",
    siteName: "Neurowork Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurowork Labs",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} min-h-dvh antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">{children}</body>
    </html>
  );
}
