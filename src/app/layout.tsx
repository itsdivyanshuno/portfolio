import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh | Portfolio",
  description:
    "Student developer exploring web technologies and building projects with Next.js, React, and Firebase.",
  openGraph: {
    title: "Divyansh | Portfolio",
    description:
      "Student developer exploring web technologies and building projects with Next.js, React, and Firebase.",
    type: "website",
    locale: "en_US",
    siteName: "Divyansh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyansh | Portfolio",
    description:
      "Student developer exploring web technologies and building projects with Next.js, React, and Firebase.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
