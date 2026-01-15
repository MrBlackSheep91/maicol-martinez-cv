"use client"

import { ExternalLink, Github, TrendingUp, Users, Bot, BarChart3 } from "lucide-react"

const projects = [
  {
    title: "Innova Hybrid",
    description: "Sistema CRM multi-industria con IA integrada, WhatsApp Business y tracking avanzado de leads. Templates para Travel, Real Estate y Restaurant.",
    image: "/projects/innova-hybrid.png",
    tags: ["Next.js", "PostgreSQL", "OpenAI", "WhatsApp API"],
    icon: BarChart3,
    colorClass: "bg-service-primary",
    link: "#",
    type: "CRM & Lead Management",
  },
  {
    title: "Innova Community",
    description: "Plataforma gamificada tipo Skool para comunidades de trading. Sistema de XP, niveles, rankings, cursos modulares y marketplace con Stripe.",
    image: "/projects/innova-community.png",
    tags: ["Next.js", "PostgreSQL", "Gamification", "Real-time"],
    icon: Users,
    colorClass: "bg-service-success",
    link: "#",
    type: "Trading Community Platform",
  },
  {
    title: "Break and Bounce",
    description: "Landing de alta conversión para copy trading con calculadora ROI interactiva y sistema S.C.O.R.E. de cualificación de leads.",
    image: "/projects/gccapital.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    icon: TrendingUp,
    colorClass: "bg-service-accent",
    link: "https://breakandbounce.com",
    type: "High-Converting Landing",
  },
  {
    title: "FlyAgency - AI Agents",
    description: "Sistema de agentes IA para WhatsApp. Automatización de ventas y soporte 24/7 con message buffering inteligente y multi-agent orchestration.",
    image: "/projects/flyagency.png",
    tags: ["FastAPI", "Claude API", "Railway", "N8N"],
    icon: Bot,
    colorClass: "bg-service-primary",
    link: "#",
    type: "AI Automation System",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia combinando
            desarrollo de software con conocimiento profundo del trading
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Header with Icon */}
              <div className={`h-48 ${project.colorClass} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-black/30 rounded-full text-xs text-white/90 mb-4">
                    {project.type}
                  </span>
                  <project.icon className="h-16 w-16 text-white/90" />
                </div>
                {/* Decorative circles */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver proyecto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Estos son solo algunos proyectos destacados. Tengo más en desarrollo.
          </p>
          <a
            href="https://github.com/maicolmartinez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground rounded-lg hover:border-primary hover:text-primary transition-all"
          >
            <Github className="h-5 w-5" />
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
