import "~/styles/globals.css";

import { type Metadata } from "next";
import { Navbar } from "~/components/organisms";

export const metadata: Metadata = {
  title: "Taveron",
  description: "Soluciones financieras para tu forma de vivir",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
