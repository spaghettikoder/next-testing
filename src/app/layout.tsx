import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import Header from '@/components/Header';
import '@/app/globals.css';
import { titleContact, githubUrlContact, telegramUrlContact, emailUrlContact } from "@/data/data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer 
          title={titleContact} 
          githubUrl={githubUrlContact} 
          telegramUrl={telegramUrlContact} 
          emailUrl={emailUrlContact} 
        />
      </body>
    </html>
  );
}
