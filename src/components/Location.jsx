import { MapPin, Clock, Phone } from 'lucide-react';
import { site } from '../data/site';

const googleMaps = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8!2d-36.66!3d-9.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDUnMDAuMCJTIDM2wrAzOSczNi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1';

export default function Location() {
  return (
    <section id="localizacao" className="secao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="rotulo">Localização</span>
          <h2 className="titulo-secao">Arapiraca - AL<br/>Atendimento presencial</h2>
          <p>Estamos localizados em um endereço de fácil acesso, prontos para recebê-lo com todo o conforto e acolhimento.</p>
        </header>
        <div className="localizacao-grid">
          <div className="informacoes-localizacao">
            <article className="info-card"><div className="icone-quadrado"><MapPin size={24}/></div><div><h3>Endereço</h3><p>Avenida Ceci Cunha, nº 1397<br/>Novo Horizonte, Arapiraca - AL</p></div></article>
            <article className="info-card"><div className="icone-quadrado icone-azul"><Clock size={24}/></div><div><h3>Horário de Funcionamento</h3><p>Segunda a Sexta: 8h às 18h<br/>Sábado e Domingo: Fechado</p></div></article>
            <article className="info-card"><div className="icone-quadrado icone-rosa"><Phone size={24}/></div><div><h3>Contato</h3><p>WhatsApp: {site.telefone}<br/><a href={'mailto:' + site.email}>{site.email}</a></p></div></article>
          </div>
          <div className="mapa-card">
            <iframe src={googleMaps} title="Localização Evoluir Clínica" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>
    </section>
  );
}
