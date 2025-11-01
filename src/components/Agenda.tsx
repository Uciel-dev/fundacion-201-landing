import '../styles/Agenda.css';

const Agenda = () => {
  return (
    <section className="agenda">
      <div className="container">
        <h2 className="section-title">Agenda de acción</h2>
        
        <div className="agenda-content">
          <div className="agenda-text">
            <p>
              Durante octubre y noviembre realizamos nuestra campaña anual de gestión 
              emocional en instituciones educativas de todo el norte argentino, 
              brindando talleres gratuitos aula por aula.
            </p>
          </div>

          <div className="agenda-highlight">
            <div className="calendar-icon">📅</div>
            <h3>Próximas Fechas Destacadas</h3>
            <ul className="dates-list">
              <li>
                <span className="date">Octubre 2024</span>
                <span className="event">Campaña en escuelas de Salta</span>
              </li>
              <li>
                <span className="date">Noviembre 2024</span>
                <span className="event">Talleres en Jujuy y Tucumán</span>
              </li>
            </ul>
          </div>

          <div className="motivational-phrase">
            <p>"Cada encuentro es una semilla de cambio."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;