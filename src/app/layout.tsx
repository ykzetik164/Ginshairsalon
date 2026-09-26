import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { salon } from "@/data/site";

const siteUrl = "https://ginshairsalon.com";
const siteTitle = "GINS 金倪斯｜台中中區韓系染燙 × 韓國認證色彩鑑定專門髮廊";
const siteDescription =
  "GINS 金倪斯位於臺中市中區，提供男女韓系剪燙染與髮質修護，結合韓國認證個人色彩鑑定，依照膚色、臉型與個人風格，規劃適合日常的髮型與髮色。";

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
    streetAddress: "民族路195號",
    addressLocality: "中區",
    addressRegion: "臺中市",
    postalCode: "400",
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
        <Analytics />
      </body>
    </html>
  );
}
