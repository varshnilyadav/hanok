import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HANOK – Seoulful Food | Korean Restaurant Hyderabad",
  description:
    "Experience authentic Korean cuisine in the heart of Hyderabad. HANOK - Seoulful Food blends cozy luxury ambiance with homemade kimchi, custom sauces, and classic street food at Film Nagar, Jubilee Hills.",
  keywords: [
    "Korean Restaurant Hyderabad",
    "Hanok Seoulful Food",
    "Film Nagar Jubilee Hills",
    "Korean Food Hyderabad",
    "Best Korean Food",
    "Priya Vasireddy",
    "Cravery Cafe",
  ],
  authors: [{ name: "Hanok Seoulful Food" }],
  openGraph: {
    title: "HANOK – Seoulful Food | Authentic Korean Cuisine in Hyderabad",
    description:
      "A taste of Seoul in the City of Biryani. Enjoy cozy luxury wooden interiors, cane chandeliers, and spicy Korean dishes in Jubilee Hills, Hyderabad.",
    url: "https://hanokhyderabad.com",
    siteName: "Hanok Seoulful Food",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${lora.variable} scroll-smooth`}
    >
      <body className="bg-brand-cream text-brand-navy font-body antialiased min-h-screen flex flex-col selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
