import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BioHAK Wellness — Launching Soon",
  description:
    "Science-backed wellness, simplified. BioHAK is launching soon — join the list to be first to know.",
  openGraph: {
    title: "BioHAK Wellness — Launching Soon",
    description:
      "Science-backed wellness, simplified. Join the list to be first to know.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body">{children}</body>
    </html>
  );
}
