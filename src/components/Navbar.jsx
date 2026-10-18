import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { linkWhatsApp } from '../data/site';

const links = [
  { href: '#sobre', texto: 'Sobre' },
  { href: '#servicos', texto: 'Serviços' },
  { href: '#equipe', texto: 'Equipe' },
  { href: '#localizacao', texto: 'Localização' },
  { href: '#contato', texto: 'Contato' },
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(function () {
    function observarRolagem() { setRolou(window.scrollY > 20); }
    observarRolagem();
    window.addEventListener('scroll', observarRolagem, { passive: true });
    return function () { window.removeEventListener('scroll', observarRolagem); };
  }, []);

  function fecharMenu() { setMenuAberto(false); }

  return (
    <header className={'navbar' + (rolou || menuAberto ? ' navbar-rolada' : '')}>
      <nav className="container navbar-conteudo" aria-label="Navegação principal">
        <a className="marca" href="#home" onClick={fecharMenu}>
          <img src="/logo.png" alt="Logo Evoluir Clínica" width="48" height="48" />
          <span>Evoluir Clínica</span>
        </a>
        <div className="links-desktop">
          {links.map(function (link) {
            return <a key={link.href} href={link.href}>{link.texto}</a>;
          })}
        </div>
        <a className="botao botao-primario botao-navbar desktop" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
          Agendar Consulta
        </a>
        <button className="menu-botao" type="button" aria-expanded={menuAberto} aria-controls="menu-mobile" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} onClick={function () { setMenuAberto(!menuAberto); }}>
          {menuAberto ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </nav>
      {menuAberto && (
        <div className="menu-mobile container" id="menu-mobile">
          {links.map(function (link) {
            return <a key={link.href} href={link.href} onClick={fecharMenu}>{link.texto}</a>;
          })}
          <a className="botao botao-primario" href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={fecharMenu}>Agendar Consulta</a>
        </div>
      )}
    </header>
  );
}
