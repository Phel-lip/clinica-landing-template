"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-4">
              Localização
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Arapiraca - AL  
              Atendimento presencial
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Estamos localizados em um endereço de fácil acesso, prontos para 
              recebê-lo com todo o conforto e acolhimento.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Endereço
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Avenida Ceci Cunha, nº 1397
                        <br />
                        Novo Horizonte, Arapiraca - AL
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Segunda a Sexta: 8h às 18h
                        <br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Contato
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        WhatsApp: (82) 99999-9999
                        <br />
                        contato@evoluirclinica.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg overflow-hidden h-full min-h-[400px]">
                <CardContent className="p-0 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8!2d-36.66!3d-9.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDUnMDAuMCJTIDM2wrAzOSczNi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Evoluir Clínica"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
