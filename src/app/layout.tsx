import type { Metadata, Viewport } from "next";
import "./globals.css";
import { salon } from "@/data/site";

const siteUrl = "https://ginshairsalon.com";
const siteTitle = "GINS 金倪斯髮廊｜台中韓系染燙 x 韓國認證色彩鑑定專門髮廊";
const siteDescription =
  "GINS 金倪斯髮廊位於台中市民族路，全台第一間首推韓國認證色彩鑑定，提供韓系女髮設計、染髮、燙髮、男生剪髮與 MILBON / 結構修護護髮，9 位設計師依髮況與風格量身安排。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s｜GINS 金倪斯髮廊"
  },
  description: siteDescription,
  keywords: [
    "台中髮廊",
    "台中染髮",
    "台中燙髮",
    "民族路髮廊",
    "韓系髮廊",
    "韓系染髮",
    "個人色彩鑑定",
    "色彩診斷",
    "台中韓系燙髮",
    "GINS 金倪斯髮廊"
  ],
  applicationName: "GINS 金倪斯髮廊",
  authors: [{ name: "GINS 金倪斯髮廊" }],
  category: "hair salon",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "GINS 金倪斯髮廊",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/gins-hero-salon.jpg",
        width: 1200,
        height: 630,
        alt: "GINS 金倪斯髮廊店內空間"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/gins-hero-salon.jpg"]
  }
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: salon.fullName,
  image: `${siteUrl}/images/gins-hero-salon.jpg`,
  url: siteUrl,
  telephone: salon.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: salon.address,
    addressLocality: "台中市",
    addressCountry: "TW"
  },
  sameAs: [salon.instagramUrl, salon.lineUrl].filter(Boolean)
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
