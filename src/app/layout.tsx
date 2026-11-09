import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://midwaykuzhimandi.com"),
  title: "Midway Kuzhimandi | Authentic Pit-Smoked Arabian Mandhi in Kerala",
  description:
    "Welcome to Midway Kuzhimandhi. Taste authentic pit-smoked Arabian Mandhi cooked with secret Yemeni spices across our 5 branches in Kerala. Dine-in, Takeaway & Catering.",
  keywords: [
    "Midway Kuzhimandi",
    "Kuzhimandhi Kerala",
    "Arabian Mandhi",
    "Chicken Kuzhimandhi",
    "Beef Mandhi",
    "Alfaham",
    "Kerala Food",
    "Pit Cooked Mandhi"
  ],
  openGraph: {
    title: "Midway Kuzhimandhi | 5 Branches Across Kerala",
    description: "Authentic Arabian pit-smoked Kuzhimandhi, grills, and fragrant saffron basmati rice.",
    images: ["/images/hero-mandhi.jpg"],
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased selection:bg-red-100 selection:text-red-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
