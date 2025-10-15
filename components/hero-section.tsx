"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
// Ribbons se mostrará a nivel global desde el layout

const ROTATING_TEXTS = [
  "Transformando datos en impacto",
  "Científico de Datos en formación",
  "Soluciones creativas con Machine Learning",
  "Construyendo el futuro con IA",
] as const

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % ROTATING_TEXTS.length)
        setIsTyping(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full float opacity-60"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary rounded-full float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Ribbons ahora se gestionan globalmente desde el layout */}

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
              Andrés España
            </h1>

            <div className="h-16 mb-6 flex items-center justify-center lg:justify-start">
              <p
                className={`text-xl md:text-2xl text-muted-foreground transition-all duration-500 ${
                  isTyping ? "typewriter" : "opacity-0"
                }`}
              >
                {ROTATING_TEXTS[currentText]}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Soy un estudiante de Ciencia de Datos con una profunda curiosidad por desentrañar las historias que los
              datos pueden contar. Mi objetivo es combinar el rigor analítico con la creatividad para construir
              soluciones inteligentes y eficaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button asChild size="lg" className="glow-hover group">
                <Link href="/proyectos">
                  Ver mis proyectos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Link href="/sobre-mi">Sobre mí</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/images/andres-profile.png"
                alt="Andrés España - Científico de Datos"
                width={280}
                height={280}
                className="relative rounded-full border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300 object-cover cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
