import '../styles/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="quienes-somos">
      <div className="container">
        <div className="intro">
          <h2 className="section-title">Quiénes Somos</h2>
          <p className="intro-text">
            Nacimos con la convicción de que educar emocionalmente es la base del 
            bienestar y la convivencia. Trabajamos en escuelas, clubes e instituciones 
            de todo el norte argentino, brindando espacios de reflexión, acompañamiento 
            y crecimiento.
          </p>
        </div>

        <div className="mission-vision">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Nuestra Misión</h3>
            <p>
              Promover el desarrollo emocional en niños, adolescentes y jóvenes a 
              través de talleres, encuentros y programas educativos que fortalezcan 
              los valores, la comunicación y la toma de decisiones conscientes.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🌟</div>
            <h3>Nuestra Visión</h3>
            <p>
              Una generación capaz de sentir, expresar y transformar sus emociones 
              en acciones que construyan una sociedad más justa y empática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;