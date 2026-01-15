"use client"

import { Mail, Phone, MapPin, MessageSquare, Send, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Hablemos de <span className="gradient-text">expansión LATAM</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estoy buscando mi próximo desafío en un broker con ambición de crecer en Latinoamérica.
            Si crees que puedo aportar valor a tu equipo, hablemos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Información de Contacto</h3>

            <div className="space-y-6 mb-8">
              <a
                href="mailto:maicoleluru@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-white font-medium">maicoleluru@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/5491130668911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-all group"
              >
                <div className="p-3 bg-success/10 rounded-lg group-hover:bg-success/20 transition-colors">
                  <MessageSquare className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-white font-medium">+54 9 11 3066-8911</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-white font-medium">Punta del Este, Uruguay</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-card border border-accent/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="text-white font-medium">Open to opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Busco posición como BDM o Business Developer en broker CFD/Forex con enfoque LATAM.
                Disponibilidad inmediata.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Zona horaria: GMT-3 (Punta del Este, Uruguay)</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-card border border-border rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Envía un mensaje</h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Tipo de proyecto
                </label>
                <select className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-white focus:border-primary focus:outline-none transition-colors">
                  <option value="">Selecciona una opción</option>
                  <option value="dashboard">Dashboard / KPIs</option>
                  <option value="automation">AI / Automation</option>
                  <option value="community">Plataforma Community</option>
                  <option value="leads">Sistema de Leads</option>
                  <option value="landing">Landing / Funnel</option>
                  <option value="consulting">Consultoría</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-all"
              >
                <Send className="h-5 w-5" />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
