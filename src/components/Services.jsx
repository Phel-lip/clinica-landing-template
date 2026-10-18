import { Brain, MessageSquare, BookOpen, ArrowRight } from 'lucide-react';
import { linkWhatsApp } from '../data/site';

const servicos = [
  { titulo: 'Psicologia', descricao: 'Atendimento psicológico para saúde emocional e comportamento', Icone: Brain, estilo: 'lilas', detalhes: ['Avaliação psicológica', 'Terapia cognitivo-comportamental', 'Orientação parental', 'Intervenção ABA'] },
  { titulo: 'Fonoaudiologia', descricao: 'Desenvolvimento da comunicação e linguagem', Icone: MessageSquare, estilo: 'azul', detalhes: ['Avaliação de linguagem', 'Terapia de fala', 'Avaliação de frênulo lingual', 'Comunicação alternativa'] },
  { titulo: 'Neuropsicopedagogia', descricao: 'Apoio ao aprendizado e desenvolvimento cognitivo', Icone: BookOpen, estilo: 'rosa', detalhes: ['Avaliação neuropsicopedagógica', 'Intervenção cognitiva', 'Apoio à aprendizagem', 'Estimulação neuroplástica'] },
];

export default function Services() {
  return (
    <section id="servicos" className="secao">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="rotulo">Nossos Serviços</span>
          <h2 className="titulo-secao">Atendimento especializado para cada necessidade</h2>
          <p>Oferecemos um atendimento integrado em psicologia, fonoaudiologia e neuropsicopedagogia, com foco no desenvolvimento, comunicação e saúde emocional.</p>
        </header>
        <div className="servicos-grid">
          {servicos.map(function (servico) {
            return (
              <article className="servico-card" key={servico.titulo}>
                <div className={'servico-topo servico-' + servico.estilo}>
                  <div className="icone-grande"><servico.Icone size={32}/></div>
                  <h3>{servico.titulo}</h3>
                  <p>{servico.descricao}</p>
                </div>
                <div className="servico-detalhes">
                  <ul>
                    {servico.detalhes.map(function (item) { return <li key={item}>{item}</li>; })}
                  </ul>
                  <a className="link-seta" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">Agendar atendimento <ArrowRight size={17}/></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
