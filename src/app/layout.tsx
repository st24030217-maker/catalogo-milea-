import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mileastudio.com"),
  title: "MILEA studio | Papelería Fina & Diseño de Autor",
  description: "Diseño gráfico de identidad y papelería social & creativa con alma artesanal. Invitaciones premium, branding comercial, packaging y diseño de autor.",
  openGraph: {
    title: "MILEA studio | Papelería Fina & Diseño de Autor",
    description: "Diseño gráfico de identidad y papelería social & creativa con alma artesanal. Invitaciones premium, branding comercial, packaging y diseño de autor.",
    url: "https://mileastudio.com", // Reemplazar con el dominio de producción
    siteName: "MILEA studio",
    images: [
      {
        url: "/logo-milea.png",
        width: 1200,
        height: 630,
        alt: "MILEA studio Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MILEA studio | Papelería Fina & Diseño de Autor",
    description: "Diseño gráfico de identidad y papelería social & creativa con alma artesanal. Invitaciones premium, branding comercial, packaging y diseño de autor.",
    images: ["/logo-milea.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
