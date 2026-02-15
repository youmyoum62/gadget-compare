import type { Metadata } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/utils/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - ガジェット比較・レビュー`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col bg-background antialiased">
        <TopBar />
        <main className="mx-auto w-full max-w-md flex-1 px-4 py-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
