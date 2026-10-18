import { Heart, Brain, Sparkles, MessageCircle } from 'lucide-react';
import { linkWhatsApp } from '../data/site';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-fundo" aria-hidden="true">
        <span className="orb orb-1"/><span className="orb orb-2"/><span className="orb orb-3"/>
        <Heart className="icone-flutuante decor-1" size={30}/>
        <Brain className="icone-flutuante decor-2" size={40}/>
        <Sparkles className="icone-flutuante decor-3" size={28}/>
        <MessageCircle className="icone-flutuante decor-4" size={32}/>
      </div>
      <div className="container hero-conteudo">
        <div className="hero-logo"><img src="/logo.png" alt="Logotipo da Evoluir Clínica" /></div>
        <div className="hero-selo"><span className="selo-ponto"/>Atendimento integrado para crianças, com foco no desenvolvimento, comunicação e saúde emocional.</div>
        <h1>Cuidado especializado para o desenvolvimento <span>infantil e bem-estar emocional</span></h1>
        <p className="hero-subtitulo">Psicologia, Fonoaudiologia e Neuropsicopedagogia em um só lugar. Uma equipe multidisciplinar dedicada ao seu bem-estar e desenvolvimento.</p>
        <div className="acoes-hero">
          <a className="botao botao-primario botao-grande" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/>Agendar consulta agora</a>
          <a className="botao botao-outline botao-grande" href="#servicos">Conhecer Serviços</a>
        </div>
        <div className="sinais-confianca">
          <span><Heart size={20}/>Atendimento Humanizado</span>
          <span><Brain size={20}/>Equipe Especializada</span>
          <span><Sparkles size={20}/>Intervenção Integrada</span>
        </div>
      </div>
      <div className="indicador-scroll" aria-hidden="true"><span/></div>
    </section>
  );
}
