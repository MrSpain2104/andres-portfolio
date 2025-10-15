"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin, Instagram } from "lucide-react"

export default function ContactoClient() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Construyamos algo increíble juntos. Ponte en contacto conmigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="fade-in-up">
            <Card className="border-border/50 card-hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:andresespana061@gmail.com"
                      className="text-foreground hover:text-primary transition-colors focus-visible"
                    >
                      andresespana061@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="text-foreground">España</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="border-border/50 card-hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Sígueme en redes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-16 flex-col space-y-2 border-border hover:border-[#0077B5] hover:bg-[#0077B5]/10 group bg-transparent focus-visible"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/andres-españa-586211263"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6 group-hover:text-[#0077B5] transition-colors" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-16 flex-col space-y-2 border-border hover:border-foreground hover:bg-foreground/10 group bg-transparent focus-visible"
                    asChild
                  >
                    <a
                      href="https://github.com/AndreSpain2104?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6 group-hover:text-foreground transition-colors" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-16 flex-col space-y-2 border-border hover:border-[#E4405F] hover:bg-[#E4405F]/10 group bg-transparent col-span-2 focus-visible"
                    asChild
                  >
                    <a href="https://www.instagram.com/espana5936" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-6 w-6 group-hover:text-[#E4405F] transition-colors" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="mt-12 text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 card-hover-lift fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">¿Tienes un proyecto en mente?</h3>
          <p className="text-muted-foreground mb-4">
            Estoy siempre abierto a discutir nuevas oportunidades y colaboraciones interesantes.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent focus-visible"
            asChild
          >
            <a href="mailto:andresespana061@gmail.com">Hablemos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}