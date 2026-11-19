import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://midwaykuzhimandi.com"),
  title: "Midway Mandi | Authentic Luxury Arabian Mandi Restaurant",
  description:
    "Experience authentic wood-smoked Arabian Mandi at Midway Mandi. Slow-cooked with time-honoured Yemeni spices across 6 branches in Kerala.",
  keywords: [
    "Midway Mandi",
    "Midway Kuzhimandi",
    "Arabian Mandi",
    "Luxury Arabian Restaurant",
    "Kerala Food",
    "Pit Cooked Mandi"
  ],
  openGraph: {
    title: "Midway Mandi | Luxury Arabian Cuisine",
    description: "Slow-cooked, flavourful Mandi with the rich heritage of Arabian cuisine across Kerala.",
    images: ["/images/hero-dish.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;0,6..96,500;0,6..96,600;1,6..96,300;1,6..96,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#D0D0D0] font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
