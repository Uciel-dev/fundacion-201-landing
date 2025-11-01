import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Transformar una emoción, puede cambiar una vida.
        </h1>
        <p className="hero-subtitle">
          Fundación 201 acompaña a niños, adolescentes y familias en su desarrollo 
          emocional y humano, construyendo comunidades más empáticas, conscientes y solidarias.
        </p>
        <div className="hero-buttons">
          <a href="#programas" className="btn btn-primary">
            Conocé nuestros programas
          </a>
          <a href="#donar" className="btn btn-secondary">
            Hacé tu aporte
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;