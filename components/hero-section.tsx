"use client"

import { ArrowDown, Github, Linkedin, Mail, TrendingUp, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,153,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,153,204,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
              <img
                src="/profile.jpg"
                alt="Maicol Martinez"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-card border border-border rounded-full">
              <span className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-muted-foreground">Open to opportunities</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            {/* Pre-title - Posicionamiento */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-accent/30 rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm text-accent font-medium">Business Development Manager | LATAM Expansion</span>
            </div>

            {/* Title - Orientado a resultado */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Escalo </span>
              <span className="gradient-text-gold">brokers CFD</span>
              <span className="text-white"> en </span>
              <span className="gradient-text">Latinoamérica</span>
            </h1>

            {/* Subtitle - Propuesta de valor */}
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Redes de IBs + adquisición de clientes + retención
            </h2>

            {/* Description - Beneficios */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <span className="text-accent font-medium">+10 años en mercados financieros</span>.
              Trader activo desde 2014, lideré equipos de ventas en MLM, trabajé como IB,
              y desarrollé business para 3 brokers distintos.
              <span className="text-white font-medium"> Entiendo al trader, al IB, y al broker porque he estado en los 3 roles.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Contactar
              </a>
              <a
                href="/CV_Maicol_Martinez_2025.html"
                target="_blank"
                className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-background transition-all flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Ver CV Completo
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/maicolmartinez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/maicolmartinez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:maicoleluru@gmail.com"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
