import '../styles/Equipo.css';

const Equipo = () => {
  return (
    <section className="equipo">
      <div className="container">
        <h2 className="section-title">Detrás de cada acción, hay un equipo comprometido</h2>
        
        <p className="equipo-intro">
          Fundación 201 está integrada por profesionales del coaching ontológico, 
          la educación, la psicología y la gestión social. Cada uno aporta su 
          vocación para acompañar procesos reales de transformación.
        </p>

        <div className="equipo-values">
          <div className="value-item">
            <div className="value-icon">💙</div>
            <h3>Empatía</h3>
            <p>Escuchamos con el corazón</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <h3>Compromiso</h3>
            <p>Presentes en cada encuentro</p>
          </div>
          <div className="value-item">
            <div className="value-icon">🌱</div>
            <h3>Transformación</h3>
            <p>Sembramos cambios duraderos</p>
          </div>
          <div className="value-item">
            <div className="value-icon">✨</div>
            <h3>Profesionalismo</h3>
            <p>Excelencia en cada acción</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;