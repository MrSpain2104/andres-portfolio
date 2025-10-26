import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Footer from "@/components/footer"
import RibbonsGlobal from "@/components/RibbonsGlobal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Andrés España - Científico de Datos",
  description:
    "Portafolio profesional de Andrés España, estudiante de ciencia de datos especializado en machine learning y análisis de datos. Transformando datos en impacto.",
  generator: "v0.app",
  keywords: [
    "ciencia de datos",
    "machine learning",
    "python",
    "análisis de datos",
    "portafolio",
    "Andrés España",
    "data science",
    "AI",
  ],
  authors: [{ name: "Andrés España" }],
  creator: "Andrés España",
  publisher: "Andrés España",
  metadataBase: new URL("https://andres-espana-portfolio.vercel.app"),
  openGraph: {
    title: "Andrés España - Científico de Datos",
    description:
      "Transformando datos en impacto. Portafolio profesional de ciencia de datos con proyectos de machine learning y análisis avanzado.",
    type: "website",
    locale: "es_ES",
    url: "https://andres-espana-portfolio.vercel.app",
    siteName: "Andrés España Portfolio",
    images: [
      {
        url: "/images/andres-profile.png",
        width: 1200,
        height: 630,
        alt: "Andrés España - Científico de Datos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés España - Científico de Datos",
    description: "Transformando datos en impacto. Portafolio profesional de ciencia de datos.",
    images: ["/images/andres-profile.png"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="canonical" href="https://andres-espana-portfolio.vercel.app" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#be123c" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Footer />
        </Suspense>
        {/* Global ribbons overlay */}
        <RibbonsGlobal />
        <Analytics />
      </body>
    </html>
  )
}
