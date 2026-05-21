import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "片付けレスキュー｜片付け・不用品回収業者の比較サイト",
    template: "%s｜片付けレスキュー",
  },
  description: "片付け・不用品回収・ゴミ屋敷・遺品整理業者を徹底比較。費用相場・口コミ・おすすめランキングで信頼できる業者を見つけましょう。",
  metadataBase: new URL("https://katazuke-rescue.com"),
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    siteName: "片付けレスキュー",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
