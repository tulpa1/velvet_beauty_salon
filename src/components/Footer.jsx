// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación interna
import styles from '../styles/modules/Footer.module.css'; // Importa el módulo CSS para el Footer
import { collection, addDoc } from 'firebase/firestore'; // Importa funciones de Firestore
import { db } from '../firebaseConfig'; // Importa la instancia de Firestore
// Eliminada la importación de 'react-input-mask' o '@react-input/mask'

/**
 * Componente del pie de página (Footer).
 * Contiene información de contacto, enlaces rápidos, redes sociales y un formulario de suscripción mejorado.
 */

function Footer() {
  const [subscriptionData, setSubscriptionData] = useState({
    phone: ''
  });
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscriptionChange = (e) => {
    const { name, value } = e.target;
    setSubscriptionData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubscriptionSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscriptionStatus('Suscribiendo...');

    try {
      const subscriptionsCollectionRef = collection(db, 'newsletterSubscriptions'); // Nueva colección
      await addDoc(subscriptionsCollectionRef, {
        phone: subscriptionData.phone,
        timestamp: new Date()
      });

      setSubscriptionStatus('¡Gracias por suscribirte! Te mantendremos informado.');
      setSubscriptionData({ phone: '' }); // Limpiar formulario, solo el campo de teléfono
    } catch (error) {
      console.error('Error al suscribir el teléfono a Firestore:', error);
      setSubscriptionStatus('Hubo un error al suscribirte. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        {/* Columna 1: Información de Contacto */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Contáctanos</h3>
          <p>
            <span role="img" aria-label="Location icon">📍</span> [Tu Dirección Completa]
          </p>
          <p>
            <span role="img" aria-label="Phone icon">📞</span> +[Tu Número de Teléfono]
          </p>
          <p>
            <span role="img" aria-label="Email icon">📧</span> info@velvetbeautysalon.com
          </p>
          <p>
            <span role="img" aria-label="Clock icon">⏰</span> Lunes - Sábado: 9 AM - 7 PM
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Enlaces Rápidos</h3>
          <ul className={styles.footerLinks}>
            <li><Link to="/" className={styles.footerLink}>Inicio</Link></li>
            <li><Link to="/servicios" className={styles.footerLink}>Servicios</Link></li>
            <li><Link to="/galeria" className={styles.footerLink}>Galería</Link></li>
            <li><Link to="/testimonios" className={styles.footerLink}>Testimonios</Link></li>
            <li><Link to="/nosotros" className={styles.footerLink}>Nosotros</Link></li>
            <li><Link to="/contacto" className={styles.footerLink}>Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales y Suscripción */}
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Síguenos</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <span role="img" aria-label="Facebook icon">📘</span>
            </a>
            <a href="https://instagram.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <span role="img" aria-label="Instagram icon">📸</span>
            </a>
            {/* Puedes añadir más iconos de redes sociales aquí */}
          </div>
          <h3 className={styles.columnTitle} style={{ marginTop: 'var(--spacing-medium)' }}>Suscríbete</h3>
          <p>Recibe nuestras últimas ofertas y noticias directamente en tu teléfono.</p>
          <form onSubmit={handleSubscriptionSubmit} className={styles.subscribeForm}>
            {/* Vuelto a un input de tipo 'tel' estándar */}
            <input
              type="tel"
              name="phone"
              placeholder="Tu Teléfono (ej. +504 XXXXXXXX)"
              value={subscriptionData.phone}
              onChange={handleSubscriptionChange}
              required
              className={styles.subscribeInput}
              disabled={isSubscribing}
            />
            <button type="submit" className={styles.subscribeButton} disabled={isSubscribing}>
              {isSubscribing ? 'Enviando...' : 'Suscribirme'}
            </button>
          </form>
          {subscriptionStatus && (
            <p className={
              subscriptionStatus.includes('¡Gracias')
                ? styles.successMessage
                : styles.errorMessage
            } style={{ marginTop: 'var(--spacing-small)' }}>
              {subscriptionStatus}
            </p>
          )}
        </div>
      </div>

      {/* Sección de Derechos de Autor */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Velvet Beauty Salon. Todos los derechos reservados.</p>
        <div className={styles.legalLinks}>
          <Link to="/privacidad" className={styles.footerLink}>Política de Privacidad</Link>
          <Link to="/terminos" className={styles.footerLink}>Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;