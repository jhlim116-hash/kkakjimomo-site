import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KKAKJIMOMO BOOK AGIT",
  description: "그림책으로 행복해지는 우리들의 아지트",
  openGraph: {
    title: "KKAKJIMOMO BOOK AGIT",
    description: "그림책으로 행복해지는 우리들의 아지트",
    url: "https://kkakjimomo-site.vercel.app",
    siteName: "KKAKJIMOMO BOOK AGIT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
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
    <html lang="ko">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}