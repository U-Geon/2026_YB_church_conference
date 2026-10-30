import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Anton } from "next/font/google";
import "./globals.css";
import ServiceWorker from "@/components/ServiceWorker";

const noto = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
  ),
  title: "ROAR 청년 컨퍼런스 | 세상 앞에서 포효하라",
  description: "2026.11.14(SAT) 인천영복교회 · 위클레시아 × 영복교회 청년 컨퍼런스 안내",
  applicationName: "ROAR 2026",
  appleWebApp: { capable: true, title: "ROAR 2026", statusBarStyle: "black-translucent" },
  openGraph: {
    title: "ROAR 청년 컨퍼런스",
    description: "세상 앞에서 포효하라 · 2026.11.14(SAT) 인천영복교회",
    images: ["/img/hero.png"],
    locale: "ko_KR",
    type: "website",
  },
  icons: { icon: "/icons/icon-192.png", apple: "/icons/icon-192.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141414",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${noto.variable} ${anton.variable}`}>
      <body className="mx-auto min-h-dvh max-w-[480px] antialiased">
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
