import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "John's portfolio",
  description: "full stack web developer based in Nyeri, Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}antialiased flex flex-col min-h-screen overflow-x-hidden bg-[#0a0a0a]`}
       >

        <main className="p-10 flex-1"> {children}</main>
      </body>
    
    </html >
  );
}
