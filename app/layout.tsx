import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasya Amalia Salsabila | Android Engineer",
  description:
    "Premium personal portfolio for an Android Engineer building scalable fintech systems.",
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
