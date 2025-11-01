import '../styles/Testimonios.css';

interface Testimonio {
  text: string;
  name: string;
  role: string;
  location: string;
}

const Testimonios = () => {
  const testimonios: Testimonio[] = [
    {
      text: 'Los chicos salieron con otra energía, con ganas de hablar y reflexionar.',
      name: 'María González',
      role: 'Docente',
      location: 'Salta Capital',
    },
    {
      text: 'Fue un espacio único donde pude conectar con lo que realmente siento.',
      name: 'Lucas Martínez',
      role: 'Estudiante',
      location: 'Jujuy',
    },
    {
      text: 'Como institución, vimos un cambio real en la convivencia y el respeto mutuo.',
      name: 'Roberto Fernández',
      role: 'Director',
      location: 'Tucumán',
    },
  ];

  return (
    <section className="testimonios">
      <div className="container">
        <h2 className="section-title">Lo que dicen quienes participaron</h2>

        <div className="testimonios-grid">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="testimonio-card">
              <div className="testimonio-content">
                <p className="testimonio-text">"{testimonio.text}"</p>
              </div>
              <div className="testimonio-author">
                <p className="author-name">{testimonio.name}</p>
                <p className="author-info">
                  {testimonio.role} — {testimonio.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;