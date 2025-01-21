import "@/styles/globals.css"
import { jura } from "@/fonts/font";
import Navbar from "@/components/main/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GsocZilla | Dashboard",
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
      <main className={`${jura.className} bg-[#FEE8C2] h-fit `} >
        <Navbar />
        {children}
      </main>
        </body>
      </html>
    );
  }
  