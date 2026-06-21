import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600"],
});

const siteDescription =
  "Neurowork Labs is a hybrid open-source AI engineering infrastructure company building software that powers the design, development, and manufacturing of next-generation physical technologies.";

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
