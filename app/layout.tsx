import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OTIKA - Jasa Integrasi Customer Service Berbasis AI",
  description: "Ubah Alur Penjualan dan Layanan Pelanggan dengan Teknologi AI. Cukup Rp 3000-an/hari setara harga Es Teh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={outfit.variable}>
      <body className="font-outfit antialiased">{children}</body>
    </html>
  );
}
