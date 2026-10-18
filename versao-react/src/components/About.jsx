import { Users, Target, Heart, Lightbulb } from 'lucide-react';

const diferenciais = [
  { titulo: 'Equipe Multidisciplinar', descricao: 'Profissionais especializados trabalhando de forma integrada', Icone: Users },
  { titulo: 'Intervenção Personalizada', descricao: 'Atendimento individualizado para cada paciente', Icone: Target },
  { titulo: 'Cuidado Humanizado', descricao: 'Acolhimento e respeito em cada etapa do tratamento', Icone: Heart },
  { titulo: 'Métodos Atualizados', descricao: 'Técnicas baseadas em evidências científicas', Icone: Lightbulb },
];

export default function About() {
  return (
    <section id="sobre" className="secao secao-branca">
      <div className="container sobre-grid">
        <div>
          <span className="rotulo">Sobre a Clínica</span>
          <h2 className="titulo-secao alinhado-esquerda">Promovendo desenvolvimento com <span>excelência e cuidado</span></h2>
          <p className="paragrafo">A Evoluir Clínica nasceu com o propósito de oferecer intervenções especializadas, promovendo o desenvolvimento cognitivo, emocional e comportamental. Nossa equipe atua de forma integrada para melhor atender cada paciente.</p>
          <p className="paragrafo">Acreditamos que cada pessoa é única e merece um atendimento personalizado, respeitando suas características individuais e promovendo seu potencial máximo de desenvolvimento.</p>
        </div>
        <div className="diferenciais-grid">
          {diferenciais.map(function (diferencial) {
            return (
              <article className="diferencial" key={diferencial.titulo}>
                <div className="icone-quadrado"><diferencial.Icone size={25}/></div>
                <h3>{diferencial.titulo}</h3>
                <p>{diferencial.descricao}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
