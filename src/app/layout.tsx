import "~/styles/globals.css";

import { type Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Footer, Navbar } from "~/components/organisms";
import { DownloadModalProvider } from "~/context/DownloadModalContext";
import type { ReactNode } from "react";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taveron",
  description: "Soluciones financieras para tu forma de vivir",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={cormorantGaramond.variable}>
      <body>
        <DownloadModalProvider>
          <Navbar />
          {children}
          <Footer />
        </DownloadModalProvider>
      </body>
    </html>
  );
}
