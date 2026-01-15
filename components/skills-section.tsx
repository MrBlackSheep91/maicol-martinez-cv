"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "LangChain", level: 85 },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "Claude API", level: 95 },
      { name: "OpenAI API", level: 90 },
      { name: "N8N", level: 90 },
      { name: "Langfuse", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Railway", level: 95 },
      { name: "Docker", level: 80 },
      { name: "DigitalOcean", level: 85 },
      { name: "Git/CI-CD", level: 90 },
    ],
  },
]

const tools = [
  "PostgreSQL", "ChromaDB", "Neo4j", "Redis", "Neon",
  "Tailwind CSS", "shadcn/ui", "MCP Servers", "Evolution API",
  "Vercel", "Supabase", "Prisma", "Drizzle"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Stack Técnico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Herramientas modernas para construir soluciones robustas y escalables
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Cloud */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-6">También trabajo con</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
