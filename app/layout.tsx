
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel & Talon — Firearms Training & Apparel",
  description: "Train Hard. Stay Sharp. Professional firearms instruction and apparel in the Inland Empire.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
