import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Twitter, Linkedin, Github, Mail, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Person, WithContext } from "schema-dts"

export default function Component() {
  // JSON-LD Structured Data
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tu Nombre",
    jobTitle: "Desarrollador Frontend",
    description:
      "Desarrollador Frontend apasionado por crear experiencias digitales increíbles. Me especializo en React, Next.js y diseño UI/UX.",
    url: "https://tu-dominio.com",
    image: "https://tu-dominio.com/profile-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad",
      addressCountry: "País",
    },
    sameAs: [
      "https://instagram.com/tu-usuario",
      "https://twitter.com/tu-usuario",
      "https://linkedin.com/in/tu-usuario",
      "https://github.com/tu-usuario",
      "https://tu-portfolio.com",
    ],
    knowsAbout: ["React", "Next.js", "JavaScript", "TypeScript", "UI/UX Design", "Frontend Development"],
    alumniOf: "Tu Universidad/Bootcamp",
    worksFor: {
      "@type": "Organization",
      name: "Tu Empresa o Freelance",
    },
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
        <div className="max-w-md mx-auto">
          {/* Profile Section with semantic HTML */}
          <header className="text-center mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/placeholder.svg?height=128&width=128&text=Profile"
                alt="Foto de perfil de Tu Nombre, Desarrollador Frontend"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Tu Nombre</h1>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Desarrollador Frontend apasionado por crear experiencias digitales increíbles. Me especializo en React,
              Next.js y diseño UI/UX. Siempre aprendiendo algo nuevo.
            </p>

            <address className="flex items-center justify-center text-sm text-gray-500 not-italic">
              <span>📍 Ciudad, País</span>
            </address>
          </header>

          {/* Social Links with semantic navigation */}
          <nav className="space-y-3 mb-8" aria-label="Enlaces a redes sociales">
            <Link
              href="https://instagram.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de Instagram de Tu Nombre"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-4">
                  <Instagram className="w-6 h-6 text-pink-500 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">Instagram</h2>
                    <p className="text-sm text-gray-500">@tu-usuario</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://twitter.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de Twitter de Tu Nombre"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-4">
                  <Twitter className="w-6 h-6 text-blue-500 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">Twitter</h2>
                    <p className="text-sm text-gray-500">@tu-usuario</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil profesional de LinkedIn de Tu Nombre"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-4">
                  <Linkedin className="w-6 h-6 text-blue-600 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">LinkedIn</h2>
                    <p className="text-sm text-gray-500">Perfil profesional</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver repositorios de código en GitHub de Tu Nombre"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-4">
                  <Github className="w-6 h-6 text-gray-800 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">GitHub</h2>
                    <p className="text-sm text-gray-500">Mis proyectos</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://tu-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar portfolio web de Tu Nombre"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-4">
                  <Globe className="w-6 h-6 text-green-600 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">Portfolio</h2>
                    <p className="text-sm text-gray-500">Mi sitio web</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </nav>

          {/* Contact Section */}
          <section className="text-center mb-8">
            <Link href="mailto:tu-email@ejemplo.com" aria-label="Enviar email a Tu Nombre">
              <Button className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Contactar
              </Button>
            </Link>
          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Tu Nombre. Hecho con ❤️</p>
          </footer>
        </div>
      </div>
    </>
  )
}