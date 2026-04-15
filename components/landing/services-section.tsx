"use client"

import { Brain, MessageSquare, BookOpen, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Brain,
    title: "Psicologia",
    description: "Atendimento psicológico para saúde emocional e comportamento",
    details: [
      "Avaliação psicológica",
      "Terapia cognitivo-comportamental",
      "Orientação parental",
      "Intervenção ABA"
    ],
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
    iconColor: "text-primary"
  },
  {
    icon: MessageSquare,
    title: "Fonoaudiologia",
    description: "Desenvolvimento da comunicação e linguagem",
    details: [
      "Avaliação de linguagem",
      "Terapia de fala",
      "Avaliação de frênulo lingual",
      "Comunicação alternativa"
    ],
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15",
    iconColor: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Neuropsicopedagogia",
    description: "Apoio ao aprendizado e desenvolvimento cognitivo",
    details: [
      "Avaliação neuropsicopedagógica",
      "Intervenção cognitiva",
      "Apoio à aprendizagem",
      "Estimulação neuroplástica"
    ],
    color: "from-secondary/40 to-secondary/10",
    iconBg: "bg-secondary/30",
    iconColor: "text-foreground"
  }
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Atendimento especializado para cada necessidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Oferecemos um atendimento integrado em psicologia, fonoaudiologia 
              e neuropsicopedagogia, com foco no desenvolvimento, comunicação e saúde emocional.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-br ${service.color} p-8`}>
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="p-8 bg-card">
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                      asChild
                    >
                      <a href="https://wa.me/5582999999999?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar atendimento
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
