import { MessageCircle, Mail, MapPin } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { site, linkWhatsApp } from '../data/site';

const servicos = [
  { texto: 'Psicologia', href: '#servicos' },
  { texto: 'Fonoaudiologia', href: '#servicos' },
  { texto: 'Neuropsicopedagogia', href: '#servicos' },
];
const clinica = [
  { texto: 'Sobre Nós', href: '#sobre' },
  { texto: 'Equipe', href: '#equipe' },
  { texto: 'Localização', href: '#localizacao' },
];

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-grid">
          <div>
            <div className="rodape-marca"><span className="rodape-emblema">E</span><strong>{site.nome}</strong></div>
            <p>{site.descricao} Psicologia, Fonoaudiologia e Neuropsicopedagogia.</p>
            <div className="rodape-redes">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da clínica"><InstagramIcon size={20}/></a>
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da clínica"><MessageCircle size={20}/></a>
            </div>
          </div>
          <div><h3>Serviços</h3><ul>{servicos.map(function (link) {return <li key={link.texto}><a href={link.href}>{link.texto}</a></li>;})}</ul></div>
          <div><h3>A Clínica</h3><ul>{clinica.map(function (link) {return <li key={link.texto}><a href={link.href}>{link.texto}</a></li>;})}</ul></div>
          <div><h3>Contato</h3><ul className="rodape-contato">
            <li><MapPin size={17}/><span>{site.endereco}<br/>{site.bairroCidade}</span></li>
            <li><MessageCircle size={17}/><a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">{site.telefone}</a></li>
            <li><Mail size={17}/><a href={'mailto:' + site.email}>{site.email}</a></li>
          </ul></div>
        </div>
        <div className="rodape-direitos">© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
