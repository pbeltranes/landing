import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Tu Nombre - Desarrollador Frontend | Portfolio y Redes Sociales",
    template: "%s | Tu Nombre",
  },
  description:
    "Desarrollador Frontend especializado en React, Next.js y diseño UI/UX. Conecta conmigo en mis redes sociales y descubre mis proyectos.",
  keywords: ["desarrollador frontend", "react", "nextjs", "ui/ux", "portfolio", "redes sociales", "tu nombre"],
  authors: [{ name: "Tu Nombre", url: "https://tu-dominio.com" }],
  creator: "Tu Nombre",
  publisher: "Tu Nombre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tu-dominio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    siteName: "Tu Nombre - Portfolio",
    title: "Tu Nombre - Desarrollador Frontend",
    description:
      "Desarrollador Frontend especializado en React, Next.js y diseño UI/UX. Conecta conmigo en mis redes sociales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Nombre - Desarrollador Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Nombre - Desarrollador Frontend",
    description: "Desarrollador Frontend especializado en React, Next.js y diseño UI/UX.",
    site: "@tu-usuario",
    creator: "@tu-usuario",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    // yandex: 'tu-codigo-yandex',
    // yahoo: 'tu-codigo-yahoo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}