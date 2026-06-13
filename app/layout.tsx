import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://tasyamalia.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tasya Amalia Salsabila | Android Engineer",
    template: "%s | Tasya Amalia Salsabila"
  },
  description:
    "Tasya Amalia Salsabila is an Android Engineer with 5+ years of experience building production fintech and banking systems across onboarding, payments, investment, lending, authentication, and security.",
  keywords: [
    "Tasya Amalia Salsabila",
    "Tasya Amalia",
    "Android Engineer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Fintech Android Engineer",
    "Mobile Banking",
    "Indonesia Android Engineer"
  ],
  authors: [{ name: "Tasya Amalia Salsabila", url: siteUrl }],
  creator: "Tasya Amalia Salsabila",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Tasya Amalia Salsabila | Android Engineer",
    description:
      "Android Engineer with 5+ years of experience building production fintech and banking systems.",
    url: siteUrl,
    siteName: "Tasya Amalia Salsabila",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Tasya Amalia Salsabila | Android Engineer",
    description:
      "Android Engineer with 5+ years of experience building production fintech and banking systems."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
