import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { ServicesSection } from "@/components/landing/services-section"
import { TeamSection } from "@/components/landing/team-section"
import { LocationSection } from "@/components/landing/location-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="space-y-24">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <LocationSection />
        <ContactSection />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
