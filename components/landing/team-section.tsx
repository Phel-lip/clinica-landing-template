"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const team = [
  {
    name: "Tatiely",
    role: "Psicóloga",
    image: "/team/tatiely.png",
    qualifications: [
      "Pós-graduação em Neuropsicologia",
      "Especialista em Saúde Mental",
      "Aplicação de terapia ABA"
    ],
    color: "bg-primary"
  },
  {
    name: "Larissa",
    role: "Fonoaudióloga",
    image: "/team/larissa.png",
    qualifications: [
      "Graduada pela UNCISAL",
      "Formação em Libras",
      "Avaliação de frênulo lingual"
    ],
    color: "bg-accent"
  },
  {
    name: "Ester",
    role: "Neuropsicopedagoga",
    image: "/team/ester.png",
    qualifications: [
      "Especialista institucional e clínica",
      "Certificada em Neuroplasticidade",
      "Intervenção ABA para TEA"
    ],
    color: "bg-secondary"
  }
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-4">
              Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Conheça as profissionais que irão cuidar de você
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Conheça as especialistas que fazem parte da Evoluir Clínica, 
              comprometidas com o desenvolvimento e bem-estar de cada paciente.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70" />
                    </div>              

                  {/* Content */}
                  <div className="p-6 -mt-8 relative">
                    <Badge className={`${member.color} text-card mb-3`}>
                      {member.role}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {member.name}
                    </h3>
                    <ul className="space-y-2">
                      {member.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {qual}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
            ))}
          </div>
              <div className="text-center mt-12">
              <a
                href="https://wa.me/5582999999999?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                Agendar atendimento com a equipe
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}
