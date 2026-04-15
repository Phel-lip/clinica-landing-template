"use client"

import { Users, Target, Heart, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    description: "Profissionais especializados trabalhando de forma integrada"
  },
  {
    icon: Target,
    title: "Intervenção Personalizada",
    description: "Atendimento individualizado para cada paciente"
  },
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description: "Acolhimento e respeito em cada etapa do tratamento"
  },
  {
    icon: Lightbulb,
    title: "Métodos Atualizados",
    description: "Técnicas baseadas em evidências científicas"
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-primary font-medium mb-4">
                Sobre a Clínica
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight text-balance">
                Promovendo desenvolvimento com{" "}
                <span className="text-primary">excelência e cuidado</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                A Evoluir Clínica nasceu com o propósito de oferecer intervenções 
                especializadas, promovendo o desenvolvimento cognitivo, emocional 
                e comportamental. Nossa equipe atua de forma integrada para melhor 
                atender cada paciente.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Acreditamos que cada pessoa é única e merece um atendimento 
                personalizado, respeitando suas características individuais e 
                promovendo seu potencial máximo de desenvolvimento.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
