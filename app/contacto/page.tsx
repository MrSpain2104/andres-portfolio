import Navigation from "@/components/navigation"
import ContactoClient from "./ContactoClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Andrés España - Científico de Datos",
  description:
    "Ponte en contacto con Andrés España para colaboraciones, proyectos de ciencia de datos o consultas profesionales. LinkedIn, GitHub e Instagram disponibles.",
  openGraph: {
    title: "Contacto | Andrés España - Científico de Datos",
    description: "Construyamos algo increíble juntos. Contacta conmigo para proyectos de ciencia de datos.",
  },
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactoClient />
    </main>
  )
}
