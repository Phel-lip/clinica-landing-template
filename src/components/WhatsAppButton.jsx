import { MessageCircle } from 'lucide-react';
import { linkWhatsApp } from '../data/site';

export default function WhatsAppButton() {
  return <a className="whatsapp-flutuante" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={29}/><span>Agendar pelo WhatsApp</span></a>;
}
