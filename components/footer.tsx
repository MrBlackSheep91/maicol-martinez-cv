"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold mb-2 block">
              <span className="gradient-text">Maicol</span>
              <span className="text-white"> Martinez</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Business Development Manager | LATAM Expansion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/maicolmartinez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/maicolmartinez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:maicoleluru@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Hecho con <Heart className="h-4 w-4 text-accent" /> en Uruguay
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Maicol Martinez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
