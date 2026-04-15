"use client"

import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react"

const links = {
  services: [
    { label: "Psicologia", href: "#servicos" },
    { label: "Fonoaudiologia", href: "#servicos" },
    { label: "Neuropsicopedagogia", href: "#servicos" },
  ],
  clinic: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Equipe", href: "#equipe" },
    { label: "Localização", href: "#localizacao" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </div>
                <span className="font-semibold text-lg">Evoluir Clínica</span>
              </div>
              <p className="text-background/70 text-sm leading-relaxed mb-6">
                Cuidando do desenvolvimento com propósito. 
                Psicologia, Fonoaudiologia e Neuropsicopedagogia.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/evoluirclinica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5582999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-3">
                {links.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic */}
            <div>
              <h4 className="font-semibold mb-4">A Clínica</h4>
              <ul className="space-y-3">
                {links.clinic.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Av. Ceci Cunha, 1397
                    <br />
                    Novo Horizonte, Arapiraca
                  </span>
                </li>
                <li className="flex items-center gap-2 text-background/70 text-sm">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>(82) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2 text-background/70 text-sm">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>contato@evoluirclinica.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/10 text-center text-background/50 text-sm">
            <p>
              © {new Date().getFullYear()} Evoluir Clínica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
