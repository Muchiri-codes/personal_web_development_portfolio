
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  weight:['400', '500', '600', '700'],
  subsets:['latin']
})
const metadata: Metadata = {
  title: "John's portfolio",
  description: "full stack web developer based in Nyeri, Kenya",
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen m-0 p-0 overflow-x-hidden text-black`}
      >
        <main className="p-4 md:p-10 flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}


export {pixelify};