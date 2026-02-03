import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AmbientAura } from "@/components/AmbientAura";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Chaudhary | Premium Portfolio",
  description: "Modern & Futuristic Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <AmbientAura />
        {children}
      </body>
    </html>
  );
}
