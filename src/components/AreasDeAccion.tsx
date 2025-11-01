import '../styles/AreasDeAccion.css';

interface Area {
  icon: string;
  title: string;
  description: string;
}

const AreasDeAccion = () => {
  const areas: Area[] = [
    {
      icon: '🏫',
      title: 'Gestión Emocional en Escuelas',
      description: 'Talleres presenciales en primaria, secundaria y universidad.',
    },
    {
      icon: '👨‍🏫',
      title: 'Formación Docente y Profesional',
      description: 'Capacitaciones y herramientas para educadores y líderes.',
    },
    {
      icon: '⚽',
      title: 'Clubes y Comunidad',
      description: 'Espacios de trabajo emocional para instituciones deportivas y sociales.',
    },
    {
      icon: '📢',
      title: 'Campañas de Conciencia y Prevención',
      description: 'Acciones masivas sobre salud emocional y bienestar juvenil.',
    },
  ];

  return (
    <section id="programas" className="areas-de-accion">
      <div className="container">
        <h2 className="section-title">Lo que hacemos</h2>
        <p className="section-intro">
          Desde Fundación 201 impulsamos distintas áreas de acción que acompañan 
          el desarrollo integral de las personas y las instituciones.
        </p>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card">
              <div className="area-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasDeAccion;