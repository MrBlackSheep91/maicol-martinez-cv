"use client"

import { TrendingUp, Code2, Users, Rocket, Calendar } from "lucide-react"

const highlights = [
  {
    icon: TrendingUp,
    title: "Mercados",
    value: "+10 años",
    description: "Forex, CFD, Indices",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Brokers",
    value: "3",
    description: "empresas diferentes",
    color: "text-primary",
  },
  {
    icon: Rocket,
    title: "Equipos",
    value: "15+",
    description: "personas lideradas",
    color: "text-success",
  },
  {
    icon: Code2,
    title: "Tech",
    value: "Bonus",
    description: "Python + IA + Dashboards",
    color: "text-accent",
  },
]

const timeline = [
  { year: "2014", title: "Trading - Inicio", desc: "Forex, análisis técnico, primeras operaciones" },
  { year: "2019", title: "iMarketsLive", desc: "Sales Team Leader - equipos, ventas, oratoria" },
  { year: "2023", title: "IB - Doo Prime", desc: "Construí red de clientes y sub-IBs" },
  { year: "2024", title: "MFX", desc: "Business Developer - redes de IBs LATAM" },
  { year: "2024", title: "EBC Financial Group", desc: "BD - clientes institucionales y afiliados" },
  { year: "2024", title: "M4Markets", desc: "BDM - expansión LATAM + tech interno" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Mi Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            De trader a <span className="gradient-text">Business Developer</span> para brokers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entiendo al trader porque soy uno. Entiendo a los IBs porque fui IB.
            Entiendo a los brokers porque trabajé en 3 empresas diferentes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <item.icon className={`h-8 w-8 ${item.color} mb-4 group-hover:scale-110 transition-transform`} />
              <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-sm font-medium text-white mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Story - 3 Acts */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Por qué puedo escalar tu broker en LATAM</h3>
            <div className="space-y-4 text-muted-foreground">
              {/* Act 1 - Trader */}
              <p>
                Empecé como <span className="text-accent font-medium">trader en 2014</span>.
                Forex, análisis técnico, y después <span className="text-white font-medium">ICT Methodology</span>.
                Sé exactamente qué busca un trader retail: spreads, ejecución, plataforma, y soporte.
                Conozco las objeciones antes de que las digan.
              </p>

              {/* Act 2 - Sales Leader */}
              <p>
                En <span className="text-accent font-medium">iMarketsLive (IM Academy)</span> lideré equipos de ventas
                por 4 años. Aprendí a reclutar, entrenar, y escalar redes de afiliados.
                <span className="text-white font-medium"> Oratoria, cierres, y KPIs de ventas</span> fueron mi día a día.
              </p>

              {/* Act 3 - IB + Broker */}
              <p>
                Fui <span className="text-primary font-medium">IB en Doo Prime</span>, construí mi propia red de clientes.
                Después trabajé como BD en <span className="text-accent font-medium">MFX y EBC Financial Group</span>,
                manejando redes de IBs y adquisición de clientes institucionales.
                Ahora en <span className="text-primary font-medium">M4Markets</span> combiné todo: desarrollo de negocio + herramientas tech.
              </p>

              {/* Value prop */}
              <p className="text-white font-medium border-l-4 border-accent pl-4 py-2 bg-card/50 rounded-r">
                Puedo hablar con un trader de retail, negociar con un IB grande, o presentar ante el board.
                Tengo la perspectiva de todos los lados del negocio.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all">
                    <span className="text-xs text-primary font-semibold">{item.year}</span>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
