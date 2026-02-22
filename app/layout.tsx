import type { Metadata, Viewport } from "next"; // Added Viewport import
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

// This handles the "Notch" and mobile scaling specifically
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
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen m-0 p-0 overflow-x-hidden bg-[#0a0a0a] text-white`}
      >
        <main className="p-4 md:p-10 flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}