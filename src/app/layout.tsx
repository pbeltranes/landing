import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Paul Beltrán - Software Engineer | Portfolio y Redes Sociales",
    template: "%s | Paul Beltrán",
  },
  description:
    "Software Engineer especializado en Node.js y React también en tecnologías vinculadas a Typescript. Conecta conmigo en mis redes sociales y descubre mis proyectos.",
  keywords: ["desarrollador", "react", "nextjs", "typescript", "portfolio", "redes sociales", "paul beltrán"],
  authors: [{ name: "Paul Beltrán", url: "https://paulbeltran.com" }],
  creator: "Paul Beltrán",
  publisher: "Paul Beltrán",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://paulbeltran.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "es_ES",
    url: "https://paulbeltran.com",
    siteName: "Paul Beltrán - Portfolio",
    title: "Paul Beltrán - Software Engineer",
    description:
      "Software Engineer especializado en React, Next.js y diseño UI/UX. Conecta conmigo en mis redes sociales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paul Beltrán - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Beltrán - Software Engineer",
    description: "Software Engineer especializado en React, Next.js y diseño UI/UX.",
    site: "@paul.beltrans",
    creator: "@paul.beltrans",
    images: ["/profile.jpg"],
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><text y='50%' x='50%' text-anchor='middle' dominant-baseline='central' font-size='48'>🦑</text></svg>" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}