import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Searcher App",
  description:
    "Welcome to the Recipe Searcher App! Here you can find several recipes from different cuisines. It's a non-commercial project based learning.",
  icons: { icon: [{ url: "/assets/logo.ico", href: "/assets/logo.ico" }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl p-4 mx-auto ">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
