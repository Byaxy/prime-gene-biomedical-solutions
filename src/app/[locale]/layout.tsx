"use client";
import { Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { ScrollContextProvider } from "@/lib/context/ScrollContext";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";
import { locales } from "@/navigation";

const lora = Lora({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={lora.className} suppressHydrationWarning>
      <Head>
        <title>Prime Gene Biomedical Solutions</title>
        <meta
          name="description"
          content="Prime Gene Biomedical Solutions: Your trusted supplier for biomedical equipment, reagents, and solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <NextUIProvider>
          <ScrollContextProvider>
            <header>
              <Header />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </ScrollContextProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
