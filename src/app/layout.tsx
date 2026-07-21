import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GINS 金倪斯髮廊｜韓國認證色彩鑑定專門髮廊",
  description: "GINS 金倪斯髮廊，台中韓國認證色彩鑑定專門髮廊，提供剪髮、染髮、燙髮、護髮與個人色彩諮詢。",
  icons: {
    icon: [
      {
        url: "/favicon.png?v=gins",
        type: "image/png",
        sizes: "64x64"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png?v=gins",
        type: "image/png",
        sizes: "180x180"
      }
    ]
  }
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
