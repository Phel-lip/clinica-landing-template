"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
                src="/logo.png"
                alt="Evoluir Clínica"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            <span className="font-semibold text-lg text-foreground">
              Evoluir Clínica
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild className="rounded-full px-6">
              <a
                href="https://wa.me/5582999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="rounded-full mt-2 w-full">
                <a
                  href="https://wa.me/5582999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
