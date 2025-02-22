"use client";
import Head from 'next/head';

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Head>
        <meta name="google-adsense-account" content="ca-pub-1767079045992000" />
      </Head>
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  </>
  );
}
