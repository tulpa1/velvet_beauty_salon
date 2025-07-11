// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styles from '../styles/modules/ContactPage.module.css'; // Importa el módulo CSS para esta página
// Importa iconos de Lucide React para un toque profesional
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

// Importa las funciones de Firestore para añadir documentos
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importa la instancia de Firestore

/**
 * Componente de la página de contacto.
 * Incluye un formulario de contacto, información de ubicación y horarios con un diseño mejorado.
 * Ahora con funcionalidad de envío de mensajes a Firebase Firestore.
 */
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Para mostrar mensajes de éxito/error
  const [isSubmitting, setIsSubmitting] = useState(false); // Para deshabilitar el botón durante el envío

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Deshabilita el botón
    setStatus('Enviando mensaje...'); // Mensaje de carga

    try {
      // Obtiene una referencia a la colección 'contactMessages'
      const contactMessagesCollectionRef = collection(db, 'contactMessages');

      // Añade un nuevo documento a la colección con los datos del formulario
      await addDoc(contactMessagesCollectionRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date() // Añade una marca de tiempo para saber cuándo se envió
      });

      setStatus('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    } catch (error) {
      console.error('Error al enviar el mensaje a Firestore:', error);
      setStatus('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false); // Habilita el botón de nuevo
    }
  };

  return (
    <section className={`${styles.contactPage} section-padding`}>
      <div className="container">
        <h2 className={styles.pageTitle}>Contáctanos</h2>
        <p className={styles.pageSubtitle}>
          ¿Tienes alguna pregunta o te gustaría agendar una cita? ¡Estamos aquí para ayudarte!
        </p>

        <div className={styles.contactContent}>
          {/* Sección de Información de Contacto */}
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Información de Contacto</h3>
            <div className={styles.infoItem}>
              <MapPin size={24} className={styles.infoIcon} />
              <p>[Tu Dirección Completa], [Tu Ciudad], [Tu País]</p>
            </div>
            <div className={styles.infoItem}>
              <Phone size={24} className={styles.infoIcon} />
              <p>+[Tu Número de Teléfono]</p>
            </div>
            <div className={styles.infoItem}>
              <Mail size={24} className={styles.infoIcon} />
              <p>info@velvetbeautysalon.com</p>
            </div>
            <div className={styles.infoItem}>
              <Clock size={24} className={styles.infoIcon} />
              <div>
                <p>Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 10:00 AM - 5:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            <h3 className={styles.infoTitle} style={{ marginTop: 'var(--spacing-medium)' }}>Síguenos en Redes Sociales</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <Facebook size={32} />
              </a>
              <a href="https://instagram.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={32} />
              </a>
            </div>

            <h3 className={styles.infoTitle} style={{ marginTop: 'var(--spacing-medium)' }}>Encuéntranos en el Mapa</h3>
            {/* Placeholder para un mapa incrustado (Google Maps, OpenStreetMap) */}
            <div className={styles.mapPlaceholder}>
              <p>Mapa de Ubicación Aquí</p>
              {/* Ejemplo de iframe de Google Maps (reemplaza con tu ubicación real)
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
          <div className={styles.contactFormContainer}>
            <h3 className={styles.infoTitle}>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.formInput}
                disabled={isSubmitting} // Deshabilita el input durante el envío
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
                disabled={isSubmitting} // Deshabilita el input durante el envío
              />
              <textarea
                name="message"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className={styles.formTextarea}
                disabled={isSubmitting} // Deshabilita el textarea durante el envío
              ></textarea>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
            {status && (
              <p className={status.includes('éxito') ? styles.successMessage : styles.errorMessage}>
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
