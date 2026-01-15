"use client"

import {
  BarChart3,
  Bot,
  Users,
  TrendingUp,
  Target,
  Rocket,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Plataformas Community",
    description: "Tu comunidad de trading con superpoderes: gamificación, rankings, tracking de trades, XP por actividad. Retiene miembros y escala tu marca.",
    features: ["Sistema de XP y niveles", "Leaderboards competitivos", "Tracking automático de trades"],
    colorClass: "bg-service-success",
  },
  {
    icon: Bot,
    title: "Agentes de Venta con IA",
    description: "Automatiza tu proceso de ventas con agentes inteligentes. Califican leads 24/7, responden dudas, y escalan las oportunidades calientes a tu equipo.",
    features: ["Calificación automática S.C.O.R.E.", "WhatsApp + Email automation", "Handoff inteligente a humanos"],
    colorClass: "bg-service-primary",
  },
  {
    icon: Target,
    title: "Estrategia Growth (Hormozi)",
    description: "Diseño de ofertas irresistibles, sistemas de adquisición de leads, y embudos de venta optimizados. Metodología $100M Offers aplicada a trading.",
    features: ["Oferta Grand Slam", "Lead magnets de alto valor", "Funnels de conversión"],
    colorClass: "bg-service-accent",
  },
  {
    icon: BarChart3,
    title: "Dashboards & KPIs",
    description: "Visualiza lo que importa: métricas de rendimiento, tracking de traders, conversión de leads. Toma decisiones basadas en datos reales.",
    features: ["Analytics en tiempo real", "KPIs personalizados", "Integración con CRMs"],
    colorClass: "bg-service-primary",
  },
  {
    icon: TrendingUp,
    title: "Herramientas para Traders",
    description: "Desarrollo de herramientas especializadas: journals automáticos, calculadoras de riesgo, sistemas de señales, y análisis con IA.",
    features: ["Trade Journals automáticos", "Calculadoras de R:R", "Análisis de mercado con IA"],
    colorClass: "bg-service-accent",
  },
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversión",
    description: "Páginas que convierten visitantes en leads calificados. Formularios S.C.O.R.E., diseño profesional, y optimización continua.",
    features: ["Conversión optimizada", "Formularios inteligentes", "A/B Testing"],
    colorClass: "bg-service-success",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Soluciones que <span className="gradient-text-gold">escalan</span> tu comunidad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No solo construyo software - diseño sistemas completos que atraen,
            convierten y retienen miembros. Tecnología + estrategia de crecimiento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl ${service.colorClass} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                Consultar
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            ¿Listo para escalar tu comunidad de trading?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-all"
          >
            Agenda una llamada estratégica
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
