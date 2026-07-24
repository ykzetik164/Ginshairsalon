import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GINS 金倪斯髮廊｜韓國認證色彩鑑定專門髮廊",
  description:
    "GINS 金倪斯髮廊位於台中市民族路，提供韓系女髮、染燙設計、MILBON / YUNARO 護髮修護與韓國認證色彩鑑定服務。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  }
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
      <body>{children}</body>
    </html>
  );
}
