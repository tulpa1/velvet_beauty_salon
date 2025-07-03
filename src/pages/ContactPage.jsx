// src/pages/ContactPage.jsx
import React, { useState } from 'react';
// import styles from '../styles/modules/ContactPage.module.css'; // Si decides modularizar

/**
 * Componente de la página de contacto.
 * Incluye un formulario de contacto, información de ubicación y horarios.
 */
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Para mostrar mensajes de éxito/error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    // Aquí es donde integrarías un servicio de backend o un servicio de formularios como Formspree
    // Por ahora, solo simular una respuesta
    try {
      // Simular un envío de 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Formulario enviado:', formData);
      setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-center">Contáctanos</h2>
        <p className="text-center" style={{ marginBottom: 'var(--spacing-large)' }}>
          ¿Tienes alguna pregunta o te gustaría agendar una cita? ¡Estamos aquí para ayudarte!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          backgroundColor: 'var(--background-white)',
          borderRadius: 'var(--border-radius-base)',
          boxShadow: 'var(--shadow-light)',
          padding: 'var(--spacing-large)'
        }}>
          {/* Sección de Información de Contacto */}
          <div>
            <h3>Información de Contacto</h3>
            <p><strong>Dirección:</strong> [Tu Dirección Completa], [Tu Ciudad], [Tu País]</p>
            <p><strong>Teléfono:</strong> +[Tu Número de Teléfono]</p>
            <p><strong>Email:</strong> info@velvetbeautysalon.com</p>
            <p><strong>Horario:</strong></p>
            <ul>
              <li>Lunes - Viernes: 9:00 AM - 7:00 PM</li>
              <li>Sábados: 10:00 AM - 5:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>

            <h3 style={{ marginTop: 'var(--spacing-medium)' }}>Síguenos en Redes Sociales</h3>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '15px' }}>
              {/* Iconos de redes sociales (puedes usar Font Awesome o SVG) */}
              <a href="https://facebook.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2em', color: 'var(--primary-color)' }}>
                {/* Placeholder para icono de Facebook */}
                <span role="img" aria-label="Facebook">📘</span>
              </a>
              <a href="https://instagram.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2em', color: 'var(--primary-color)' }}>
                {/* Placeholder para icono de Instagram */}
                <span role="img" aria-label="Instagram">📸</span>
              </a>
            </div>

            <h3 style={{ marginTop: 'var(--spacing-medium)' }}>Encuéntranos en el Mapa</h3>
            {/* Placeholder para un mapa incrustado (Google Maps, OpenStreetMap) */}
            <div style={{
              width: '100%',
              height: '250px',
              backgroundColor: 'var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--border-radius-base)',
              marginTop: '15px'
            }}>
              <p style={{ color: 'var(--text-light)' }}>[Mapa de Ubicación Aquí]</p>
              {/* Ejemplo de iframe de Google Maps (reemplaza con tu ubicación)
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_BUSINESS_NAME!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 'var(--border-radius-base)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              */}
            </div>
          </div>

          {/* Sección del Formulario de Contacto */}
          <div>
            <h3>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '12px',
                  borderRadius: 'var(--border-radius-base)',
                  border: '1px solid var(--border-color)',
                  fontSize: '1em'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '12px',
                  borderRadius: 'var(--border-radius-base)',
                  border: '1px solid var(--border-color)',
                  fontSize: '1em'
                }}
              />
              <textarea
                name="message"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  padding: '12px',
                  borderRadius: 'var(--border-radius-base)',
                  border: '1px solid var(--border-color)',
                  fontSize: '1em',
                  resize: 'vertical'
                }}
              ></textarea>
              <button type="submit" className="btn-primary">
                Enviar Mensaje
              </button>
            </form>
            {status && (
              <p style={{ marginTop: '15px', textAlign: 'center', color: status.includes('éxito') ? 'green' : 'red' }}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
