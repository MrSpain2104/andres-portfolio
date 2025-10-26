import Navigation from "@/components/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Code, Database, BarChart3, Brain, Zap, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Mí | Andrés España - Científico de Datos",
  description:
    "Conoce más sobre Andrés España, estudiante de ciencia de datos especializado en machine learning, Python y análisis de datos. Transformando información en insights accionables.",
  openGraph: {
    title: "Sobre Mí | Andrés España - Científico de Datos",
    description:
      "Estudiante apasionado de ciencia de datos con experiencia en machine learning, Python y visualización de datos.",
  },
}

export default function SobreMiPage() {
  const skills = [
    { name: "Python", icon: Code, description: "Desarrollo y análisis de datos" },
    { name: "Machine Learning", icon: Brain, description: "Modelos predictivos y clasificación" },
    { name: "SQL", icon: Database, description: "Gestión y consulta de bases de datos" },
    { name: "Tableau", icon: BarChart3, description: "Visualización de datos interactiva" },
    { name: "TensorFlow", icon: Zap, description: "Deep Learning y redes neuronales" },
    { name: "Power BI", icon: Globe, description: "Dashboards y reportes empresariales" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre Mí
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Construyendo el futuro con datos, una solución a la vez
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in-up">
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors">
                <Image
                  src="/images/andres-profile.png"
                  alt="Andrés España - Científico de Datos especializado en machine learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Hola, soy Andrés España</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy un estudiante apasionado de ciencia de datos con una visión clara: transformar información
                  compleja en insights accionables que generen impacto real en las organizaciones.
                </p>
                <p>
                  Mi trayectoria académica me ha permitido desarrollar una sólida base en estadística, programación y
                  machine learning. Me especializo en encontrar patrones ocultos en los datos y crear soluciones
                  innovadoras que impulsen la toma de decisiones estratégicas.
                </p>
                <p>
                  Cuando no estoy analizando datasets o entrenando modelos, disfruto explorando las últimas tendencias
                  en inteligencia artificial y contribuyendo a proyectos de código abierto.
                </p>
              </div>

              <Button asChild className="mt-8 glow-hover group" size="lg">
                <a href="/files/CV-Andres-Espana.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Descargar CV
                </a>
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">
                Para habilitar la descarga, coloca tu CV en <code className="bg-muted px-1 rounded">/public/files/CV-Andres-Espana.pdf</code>.
                Hay un README en esa carpeta con instrucciones.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Habilidades Técnicas</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
