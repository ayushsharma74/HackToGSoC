import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Jura } from "next/font/google";
const jura = Jura({
  weight: "400",
  style: "normal",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GsocZilla",
  description: "An app to simplify gsoc contributions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jura.className} antialiased`}
      >
        <Navbar />
        {children}

        <Footer twitterUrl="https://x.com/ayushon_twt" discordUrl="#" githubUrl="https://github.com/ayushsharma74"/>
      </body>
    </html>
  );
}
