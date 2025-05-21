"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundPattern } from "@/components/background-pattern"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <BackgroundPattern />
      {/* Header/Hero Section with gradient background */}
      <header className="relative bg-gradient-to-r from-primary/90 to-accent/90 text-white shadow-lg">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Damian Gomez"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">Jose Perez</h1>
              <p className="text-xl md:text-2xl mt-2 text-white/90">Desarrollador Full Stack</p>
              <div className="flex items-center justify-center md:justify-start mt-3 text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                <Button
                  className="bg-white text-primary hover:bg-white/90 flex items-center gap-2"
                  onClick={() => (window.location.href = "mailto:gomezd136@gmail.com")}
                >
                  <Mail className="h-4 w-4" />
                  Contactar
                </Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="secondary" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/20 text-white border-white/40 hover:bg-white/30 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-heading inline-block">Acerca de</h2>
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Soy un desarrollador full stack apasionado por crear soluciones tecnológicas innovadoras. Con
                experiencia en el desarrollo de aplicaciones web y móviles, me especializo en JavaScript, React, Node.js
                y otras tecnologías modernas. Me enfoco en escribir código limpio, mantenible y escalable para resolver
                problemas complejos.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-heading inline-block">Experiencia</h2>

          <Card className="mb-6 card-hover border-none shadow-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Desarrollador Senior</h3>
                  <p className="text-primary font-medium">Empresa Tecnológica S.A.</p>
                  <p className="text-sm text-gray-500 mt-1">Enero 2020 - Presente</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Badge className="badge-gradient">Buenos Aires, Argentina</Badge>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Desarrollo de aplicaciones web utilizando React, Next.js y Node.js. Implementación de arquitecturas
                escalables y mantenimiento de bases de datos. Colaboración en equipos ágiles y mentoreo de
                desarrolladores junior.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 card-hover border-none shadow-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Desarrollador Web</h3>
                  <p className="text-primary font-medium">Agencia Digital</p>
                  <p className="text-sm text-gray-500 mt-1">Marzo 2018 - Diciembre 2019</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Badge className="badge-gradient">Buenos Aires, Argentina</Badge>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Desarrollo frontend con HTML, CSS y JavaScript. Implementación de diseños responsivos y optimización de
                rendimiento web. Integración con APIs y sistemas de gestión de contenido.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-heading inline-block">Educación</h2>

          <Card className="mb-6 card-hover border-none shadow-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Universidad de Buenos Aires</h3>
                  <p className="text-primary font-medium">Licenciatura en Ciencias de la Computación</p>
                  <p className="text-sm text-gray-500 mt-1">2014 - 2018</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    Graduado
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-heading inline-block">Habilidades</h2>

          <Card className="border-none shadow-md">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary hover:bg-primary/90 px-3 py-1 text-sm">JavaScript</Badge>
                <Badge className="bg-primary hover:bg-primary/90 px-3 py-1 text-sm">TypeScript</Badge>
                <Badge className="bg-primary hover:bg-primary/90 px-3 py-1 text-sm">React</Badge>
                <Badge className="bg-secondary hover:bg-secondary/90 px-3 py-1 text-sm">Next.js</Badge>
                <Badge className="bg-secondary hover:bg-secondary/90 px-3 py-1 text-sm">Node.js</Badge>
                <Badge className="bg-secondary hover:bg-secondary/90 px-3 py-1 text-sm">Express</Badge>
                <Badge className="bg-accent hover:bg-accent/90 px-3 py-1 text-sm">MongoDB</Badge>
                <Badge className="bg-accent hover:bg-accent/90 px-3 py-1 text-sm">PostgreSQL</Badge>
                <Badge className="bg-accent hover:bg-accent/90 px-3 py-1 text-sm">HTML5</Badge>
                <Badge className="bg-primary hover:bg-primary/90 px-3 py-1 text-sm">CSS3</Badge>
                <Badge className="bg-primary hover:bg-primary/90 px-3 py-1 text-sm">Tailwind CSS</Badge>
                <Badge className="bg-secondary hover:bg-secondary/90 px-3 py-1 text-sm">Git</Badge>
                <Badge className="bg-secondary hover:bg-secondary/90 px-3 py-1 text-sm">Docker</Badge>
                <Badge className="bg-accent hover:bg-accent/90 px-3 py-1 text-sm">AWS</Badge>
                <Badge className="bg-accent hover:bg-accent/90 px-3 py-1 text-sm">CI/CD</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-heading inline-block">Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-hover border-none shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary relative">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">E-commerce Platform</h3>
                    <p className="text-white/80 mt-2">Plataforma de comercio completa</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mt-2">
                  Plataforma de comercio electrónico desarrollada con React, Node.js y MongoDB. Incluye sistema de
                  pagos, gestión de inventario y panel de administración.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    MongoDB
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 text-primary hover:text-primary/90 p-0 h-auto flex items-center gap-1"
                >
                  Ver proyecto <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-none shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary to-accent relative">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Task Management App</h3>
                    <p className="text-white/80 mt-2">Gestión de tareas colaborativa</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mt-2">
                  Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real. Desarrollada con
                  Next.js, Firebase y Tailwind CSS.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    Firebase
                  </Badge>
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    Tailwind
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 text-secondary hover:text-secondary/90 p-0 h-auto flex items-center gap-1"
                >
                  Ver proyecto <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/90 to-accent/90 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-white/80">© {new Date().getFullYear()} Damian Gomez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
