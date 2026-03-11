import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AdrianoTS | Presença Premium",
  description: "Landing page e cartão interativo premium para Adriano Tiburcio."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-noir text-ivory antialiased">{children}</body>
    </html>
  );
}
