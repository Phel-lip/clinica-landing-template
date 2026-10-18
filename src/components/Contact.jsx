import { MessageCircle, ArrowRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { site, linkWhatsApp } from '../data/site';

export default function Contact() {
  return (
    <section id="contato" className="secao contato-secao">
      <div className="container contato-conteudo">
        <span className="rotulo">Entre em Contato</span>
        <h2 className="titulo-secao">Pronto para dar o <span>próximo passo</span>?</h2>
        <p>Agende uma avaliação inicial e descubra o melhor caminho para o seu desenvolvimento. Nossa equipe está pronta para acolher você e sua família.</p>
        <div className="acoes-contato">
          <a className="botao botao-primario botao-grande" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={22}/>Agendar atendimento agora <ArrowRight size={20}/></a>
          <a className="botao botao-outline botao-grande" href={site.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon size={22}/>Siga no Instagram</a>
        </div>
        <p className="nota-contato">Respondemos em até 2 horas durante o horário comercial</p>
      </div>
    </section>
  );
}
