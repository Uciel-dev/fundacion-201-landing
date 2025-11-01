import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Fundación 201</h2>
            <p className="footer-slogan">"Educar las emociones es educar para la vida."</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navegación</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#quienes-somos">Quiénes Somos</a></li>
                <li><a href="#programas">Programas</a></li>
                <li><a href="#historias">Historias</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contacto</h4>
              <ul>
                <li>📧 contacto@fundacion201.org</li>
                <li>📱 +54 9 XXX XXX-XXXX</li>
                <li>📍 Región Norte, Argentina</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Redes Sociales</h4>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Fundación 201. Todos los derechos reservados.</p>
          <p className="legal">Fundación registrada sin fines de lucro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;