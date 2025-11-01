import { useState, FormEvent } from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <h2 className="section-title">Conectemos</h2>
        <p className="section-subtitle">
          Si querés que visitemos tu institución o querés sumarte como colaborador, escribinos.
        </p>

        <div className="contacto-content">
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>
          </form>

          <div className="contacto-info">
            <h3>Seguinos en redes</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span> Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">👍</span> Facebook
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">▶️</span> YouTube
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💬</span> WhatsApp
              </a>
            </div>

            <div className="contact-details">
              <p><strong>Email:</strong> contacto@fundacion201.org</p>
              <p><strong>Teléfono:</strong> +54 9 XXX XXX-XXXX</p>
              <p><strong>Ubicación:</strong> Región Norte, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;