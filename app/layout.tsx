import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://haustechnik-stachel.lmx3xd.chatgpt.site"),
  title: "Haustechnik Stachel | Bad, Heizung und Haustechnik in Ingolstadt",
  description: "Haustechnik Stachel aus Ingolstadt – Bad, Heizung, Wasser, Gas, Klima, Solar, Reparaturen und Vaillant Kundendienst seit über 85 Jahren.",
  icons: { icon: "/images/original/LOGO_H-1-1920w.JPG", shortcut: "/images/original/LOGO_H-1-1920w.JPG" },
  openGraph: { title: "Haustechnik Stachel – Handwerk für Ihr Zuhause", description: "Bad, Heizung, Wasser, Gas, Klima und Solar in Ingolstadt.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Haustechnik Stachel – Handwerk für Ihr Zuhause" }], locale: "de_DE", type: "website" },
  twitter: { card: "summary_large_image", title: "Haustechnik Stachel – Handwerk für Ihr Zuhause", description: "Seit über 85 Jahren in Ingolstadt.", images: ["/og.png"] }
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
