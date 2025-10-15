import { Github, Linkedin, Instagram, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground">Andrés España</h3>
            <p className="text-sm text-muted-foreground">Científico de Datos</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/andres-españa-586211263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com/AndreSpain2104?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://www.instagram.com/espana5936"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>

            <Link
              href="mailto:andresespana061@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">© 2025 Andrés España.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
