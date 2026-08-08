import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haustechnik Stachel | Wärme, Wasser und Wohlfühlen",
  description: "Haustechnik Stachel aus Ingolstadt – Bad, Heizung, Wasser, Gas, Klima, Solar und Kundendienst seit über 85 Jahren.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de"><body>{children}</body>
    </html>
  );
}
