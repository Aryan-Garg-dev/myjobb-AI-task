import type { Metadata } from "next";
import { Poppins, Geist_Mono, Inter, DM_Sans, Doto } from "next/font/google";
import "./globals.css";

// default sans
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// default sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// default Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume AI",
  description: "Resume AI powered by myjobb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={"lofi"}>
      <body
        className={`
        ${poppins.variable} 
        ${doto.variable} 
        ${dmSans.variable} 
        ${geistMono.variable} 
        ${inter.variable}
        antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
