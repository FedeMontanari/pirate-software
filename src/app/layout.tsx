import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Pixelify_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["inter"],
});

export const metadata: Metadata = {
  title: "Pirate Software",
  description: "We make pretty rad games!",
  openGraph: {
    title: "Pirate Software",
    description: "Pirate Software is a small team producing Indie Games!",
    url: "https://pirate-software.vercel.app",
    siteName: "Pirate Software",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cn("font-pixel min-h-screen bg-background antialiased", [
          inter.className,
          pixel.className,
        ])}`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="pt-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
