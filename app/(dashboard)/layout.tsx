import "@/styles/globals.css"
import { jura } from "@/fonts/font";
import Navbar from "@/components/main/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) { 
    return (
      <html>

        <body>
      <main className={`${jura.className} bg-[#FEE8C2] h-screen `} >
        <Navbar />
        {children}
      </main>
        </body>
      </html>
    );
  }
  