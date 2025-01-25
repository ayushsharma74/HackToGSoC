import "@/styles/globals.css"
import { jura } from "@/fonts/font";
import Navbar from "@/components/main/Navbar";
import { Metadata } from "next";
import Footer from "@/components/main/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "HackToGSoC | Dashboard",
  description: "An app to simplify gsoc contributions",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) { 
    return (
      <html>

        <body>
        <Analytics />
      <main className={`${jura.className} bg-[#FEE8C2] h-fit `} >
        <Navbar />
        {children}
        <Footer twitterUrl="https://x.com/ayushon_twt" discordUrl="#" githubUrl="https://github.com/ayushsharma74" />
      </main>
        </body>
      </html>
    );
  }
  