import { CheckCircle2 } from 'lucide-react';
import { linkWhatsApp } from '../data/site';

const profissionais = [
  { nome: 'Tatiely', cargo: 'Psicóloga', foto: '/team/tatiely.png', bio: 'Atua com foco no desenvolvimento emocional e comportamental infantil.', qualificacoes: ['Pós-graduação em Neuropsicologia', 'Especialista em Saúde Mental', 'Aplicação de terapia ABA'], estilo: 'lilas' },
  { nome: 'Larissa', cargo: 'Fonoaudióloga', foto: '/team/larissa.png', bio: 'Atua no desenvolvimento da comunicação e linguagem em crianças e adultos.', qualificacoes: ['Graduada pela UNCISAL', 'Formação em Libras', 'Avaliação de frênulo lingual'], estilo: 'azul' },
  { nome: 'Ester', cargo: 'Neuropsicopedagoga', foto: '/team/ester.png', bio: 'Focada no apoio à aprendizagem e no desenvolvimento cognitivo.', qualificacoes: ['Especialista institucional e clínica', 'Certificada em Neuroplasticidade', 'Intervenção ABA para TEA'], estilo: 'rosa' },
];

export default function Team() {
  return (
    <section id="equipe" className="secao secao-branca">
      <div className="container">
        <header className="cabecalho-secao">
          <span className="rotulo">Nossa Equipe</span>
          <h2 className="titulo-secao">Conheça as profissionais que irão cuidar de você</h2>
          <p>Conheça as especialistas que fazem parte da Evoluir Clínica, comprometidas com o desenvolvimento e bem-estar de cada paciente.</p>
        </header>
        <div className="equipe-grid">
          {profissionais.map(function (profissional) {
            return (
              <article className="profissional-card" key={profissional.nome}>
                <div className="profissional-foto"><img src={profissional.foto} alt={'Foto de ' + profissional.nome} loading="lazy"/></div>
                <div className="profissional-conteudo">
                  <span className={'cargo cargo-' + profissional.estilo}>{profissional.cargo}</span>
                  <h3>{profissional.nome}</h3>
                  <p>{profissional.bio}</p>
                  <ul>{profissional.qualificacoes.map(function (texto) {return <li key={texto}><CheckCircle2 size={16}/>{texto}</li>;})}</ul>
                </div>
              </article>
            );
          })}
        </div>
        <div className="equipe-cta"><a className="botao botao-primario botao-grande" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">Agendar atendimento com a equipe</a></div>
      </div>
    </section>
  );
}
