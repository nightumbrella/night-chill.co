import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NightUmbrella chill ",
  description: "chill house for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning >
          <Background>{children}</Background>
      </body>
    </html>
  );
}


