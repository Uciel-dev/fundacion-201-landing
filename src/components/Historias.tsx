import '../styles/Historias.css';

interface Historia {
  text: string;
  author: string;
}

const Historias = () => {
  const historias: Historia[] = [
    {
      text: 'Desde que participaron los chicos, mejoró el clima en el aula y las conversaciones cambiaron.',
      author: 'Directora de Escuela Secundaria',
    },
    {
      text: 'Aprendí a hablar sin miedo y a pedir ayuda cuando lo necesito.',
      author: 'Estudiante, 5° año',
    },
    {
      text: 'Como docente, aprendí a gestionar mis emociones antes de acompañar a los demás.',
      author: 'Profesor participante',
    },
  ];

  return (
    <section id="historias" className="historias">
      <div className="container">
        <h2 className="section-title">Historias que nos mueven</h2>
        <p className="section-subtitle">
          Cada historia refleja una transformación. Cada encuentro, una nueva oportunidad.
        </p>

        <div className="historias-grid">
          {historias.map((historia, index) => (
            <div key={index} className="historia-card">
              <div className="quote-icon">"</div>
              <p className="historia-text">{historia.text}</p>
              <p className="historia-author">— {historia.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Historias;