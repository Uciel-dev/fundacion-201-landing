import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Fundación 201</h1>
        </div>
        
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="#quienes-somos" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</a></li>
            <li><a href="#programas" onClick={() => setIsMenuOpen(false)}>Programas</a></li>
            <li><a href="#historias" onClick={() => setIsMenuOpen(false)}>Historias</a></li>
            <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
          <a href="#donar" className="btn-donar" onClick={() => setIsMenuOpen(false)}>
            Quiero Donar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;