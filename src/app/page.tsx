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
    name: "Paul Beltrán",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer apasionado por crear experiencias digitales increíbles. Me especializo Tecnologias ligadas a Javascript/Typescript",
    url: "https://paulbeltran.com",
    image: "https://paulbeltran.com/profile.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "Chile",
    },
    sameAs: [
      "https://instagram.com/paul.beltrans",
      "https://www.linkedin.com/in/paul-beltran-espinosa/",
      "https://github.com/pbeltranes",
      "https://datamedy.cl",
    ],
    knowsAbout: ["React", "Next.js", "JavaScript", "TypeScript", "UI/UX Design", "Frontend Development"],
    alumniOf: "Universidad Diego Portales",
    worksFor: {
      "@type": "Organization",
      name: "forEach",
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
                src="/profile.jpg?height=128&width=128&text=Profile"
                alt="Foto de perfil de Paul Beltrán, Software Engineer"
                width={128}
                height={128}
                className="rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Paul Beltrán</h1>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Soy Software Engineer con pasión en el desarrollo web y emprendiemiento. Me especializo en JavaScript/Typescript y tecnologías modernas del ecosistema web. Me gusta el café por si tienes alguna duda o quieres hablar de proyectos.

            </p>

            <address className="flex items-center justify-center text-sm text-gray-500 not-italic">
              <span>📍 Santiago, Chile</span>
            </address>
          </header>

          {/* Social Links with semantic navigation */}
          <nav className="mb-8" aria-label="Enlaces a redes sociales">
            <Link
              href="https://instagram.com/paul.beltrans"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de Instagram de paul.beltrans"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer mb-4">
                <CardContent className="flex items-center p-4">
                  <Instagram className="w-6 h-6 text-pink-500 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">Instagram</h2>
                    <p className="text-sm text-gray-500">@paul.beltrans</p>
                  </div>
                </CardContent>
              </Card>
            </Link>


            <Link
              href="https://www.linkedin.com/in/paul-beltran-espinosa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil profesional de LinkedIn"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer mb-4">
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
              href="https://github.com/pbeltranes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver repositorios de código en GitHub de pbeltranes"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer mb-4">
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
              href="https://datamedy.cl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Datamedy"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer mb-4">
                <CardContent className="flex items-center p-4">
                  <Globe className="w-6 h-6 text-green-600 mr-4" aria-hidden="true" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900">Datamedy</h2>
                    <p className="text-sm text-gray-500">Herramienta para profesionales independientes que desean llevar su carrera al siguiente nivel.</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </nav>

          {/* Contact Section */}
          <section className="text-center mb-8">
            <Link href="mailto:me@paulbeltran.com" aria-label="Enviar email a Paul">
              <Button className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Contactar
              </Button>
            </Link>
          </section>

          {/* Footer */}
          <footer className="text-center text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Paul. Hecho con ❤️</p>
          </footer>
        </div>
      </div>
    </>
  )
}