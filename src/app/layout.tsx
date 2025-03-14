import type { Metadata } from "next";
import { Lexend, Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const lexend = Lexend({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-lexend",
});

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata = {
  title: "Jorge Araya | Jorge Araya Web Developer",
  description:
    "Crafting high-quality web experiences with modern technologies. I'm Jorge Araya, a seasoned web developer specializing in WordPress, Next.js and Laravel. Explore my work, insights, and services to elevate your digital presence.",
  icons: {
    icon: "/public/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NEXT_GA = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_GA}');
          `}
        </Script>
      </head>
      <body
        className={`${lexend.variable} ${openSans.variable} font-opensans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
