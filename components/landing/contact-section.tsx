"use client"

import { siteConfig, getWhatsAppLink } from "@/lib/siteConfig"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <span className="inline-block text-primary font-medium mb-4">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Pronto para dar o{" "}
            <span className="text-primary">próximo passo</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Agende uma avaliação inicial e descubra o melhor caminho para o seu desenvolvimento. Nossa equipe está 
            pronta para acolher você e sua família.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar atendimento agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-2 group"
            >
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram className="w-6 h-6" />
                Siga no Instagram
              </a>
            </Button>
          </div>

          {/* Trust Message */}
          <p className="text-sm text-muted-foreground">
            Respondemos em até 2 horas durante o horário comercial
          </p>
        </div>
      </div>
    </section>
  )
}
