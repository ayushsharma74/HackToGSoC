import Navbar from "@/components/main/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body
          className={`antialiased`}
        >
          <Navbar />
          {children}
        </body>
    );
  }
  