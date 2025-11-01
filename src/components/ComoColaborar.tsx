import '../styles/ComoColaborar.css';

const ComoColaborar = () => {
  return (
    <section id="donar" className="como-colaborar">
      <div className="container">
        <h2 className="section-title">Sumate a transformar emociones en oportunidades</h2>
        <p className="section-text">
          Tu aporte hace posible que sigamos llegando a más escuelas, más jóvenes 
          y más comunidades. Podés colaborar con una donación única o mensual.
        </p>

        <div className="colaborar-content">
          <div className="donacion-info">
            <h3>¿A dónde va tu aporte?</h3>
            <ul>
              <li>✓ Viáticos para llegar a más instituciones</li>
              <li>✓ Materiales educativos de calidad</li>
              <li>✓ Acompañamiento gratuito a comunidades</li>
              <li>✓ Formación continua del equipo</li>
            </ul>
          </div>

          <div className="donacion-cta">
            <button className="btn btn-donate">Quiero Donar</button>
            <p className="legal-text">
              Fundación registrada sin fines de lucro.<br />
              Tu contribución hace la diferencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoColaborar;