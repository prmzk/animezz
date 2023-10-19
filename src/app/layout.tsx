import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Animezz",
  description: "An anime bookmarker web app.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["anime", "manga", "show", "bookmark"],
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fff" }],
  authors: [
    { name: "Adam Primarizki" },
    {
      name: "Adam Primarizki",
      url: "https://www.linkedin.com/in/prmzk/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
