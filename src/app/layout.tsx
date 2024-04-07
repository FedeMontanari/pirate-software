import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

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
