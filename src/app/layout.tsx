import "./globals.css";
import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";
import PHProvider from "./_analytics/provider";
import PostHogPageView from "./_analytics/PostHogPageView";

const inter = Inter({ subsets: ["latin"] });
const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["inter"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pirate-software.vercel.app"),
  title: {
    default: "Pirate Software",
    template: "%s - Pirate Software",
  },
  description: "Pirate Software is a small team producing Indie Games!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="cRDH63fLEmFOQnh-eioPw60XdEiXL6drJvvZ9XYznEU"
        />
      </head>
      <PHProvider>
        <body
          className={`${cn(
            "font-pixel min-h-screen bg-background antialiased",
            [inter.className, pixel.className],
          )}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <Navbar />
            <main className="pt-4">{children}</main>
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
