import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asaanfiler.pk"),
  title: {
    default: "Asaan Filer | NTN Registration and Tax Filing Pakistan",
    template: "%s | Asaan Filer"
  },
  description:
    "Premium NTN Registration, Tax Filing Pakistan, Income Tax Calculator Pakistan, and filer assistance for only Rs. 1,000.",
  keywords: [
    "NTN Registration Pakistan",
    "Tax Filing Pakistan",
    "Become Filer Pakistan",
    "Income Tax Return Filing",
    "FBR Tax Filing",
    "Income Tax Calculator Pakistan",
    "Filer vs Non-Filer Calculator"
  ],
  openGraph: {
    title: "Asaan Filer",
    description: "Making Tax Filing Simple for Every Pakistani.",
    url: "https://asaanfiler.pk",
    siteName: "Asaan Filer",
    locale: "en_PK",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
