import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ogImage = {
  url: "/images/hero-modern-home.jpg",
  width: 1400,
  height: 933,
  alt: "Modern home with a dark roof at dusk",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://summit-roofing.example"),
  title: {
    default: "Summit Roofing Co. | Roofing in Dallas, TX",
    template: "%s | Summit Roofing Co.",
  },
  description:
    "Roof replacement, roof repair, storm damage repair, inspections, and commercial roofing in Dallas, Plano, Irving, and Frisco. Request a free estimate.",
  keywords: [
    "roofing Dallas TX",
    "roof replacement Dallas",
    "roof repair Plano",
    "storm damage roof repair",
    "commercial roofing Dallas",
    "roof inspection Frisco",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Summit Roofing Co.",
    title: "Summit Roofing Co. | Roofing in Dallas, TX",
    description:
      "Residential and commercial roofing for Dallas, Plano, Irving, and Frisco. Replacement, repair, storm damage, and inspections.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Roofing Co. | Roofing in Dallas, TX",
    description:
      "Residential and commercial roofing for Dallas, Plano, Irving, and Frisco.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#142B46",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-cream font-sans text-body antialiased">
        {children}
      </body>
    </html>
  );
}
