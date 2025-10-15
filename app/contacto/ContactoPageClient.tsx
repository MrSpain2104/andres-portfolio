"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, Send, MapPin, Instagram } from "lucide-react"

export default function ContactoPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Construyamos algo increíble juntos. Ponte en contacto conmigo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-up">
            <Card className="border-border/50 card-hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground">Gracias por contactarme. Te responderé pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Nombre
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-input border-border focus:border-primary focus:ring-primary/20 focus-visible"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-input border-border focus:border-primary focus:ring-primary/20 focus-visible"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Mensaje
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1 bg-input border-border focus:border-primary focus:ring-primary/20 resize-none focus-visible"
                        placeholder="Cuéntame sobre tu proyecto o idea..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full glow-hover group focus-visible"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Contact Information */}
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

            {/* Social Links */}
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

                  {/* <CHANGE> Added Instagram link */}
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

            {/* Call to Action */}
            <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 card-hover-lift">
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
        </div>
      </div>
    </section>
  )
}
