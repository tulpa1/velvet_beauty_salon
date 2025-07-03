// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación interna
import styles from '../styles/modules/Footer.module.css'; // Importa el módulo CSS para el Footer
import {Facebook, Instagram} from 'lucide-react';

/**
 * Componente del pie de página (Footer).
 * Contiene información de contacto, enlaces rápidos, redes sociales y derechos de autor.
 */
function Footer() {
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
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={24} />
            </a>
            {/* Puedes añadir más iconos de redes sociales aquí */}
          </div>
          <h3 className={styles.columnTitle} style={{ marginTop: 'var(--spacing-medium)' }}>Suscríbete</h3>
          <p>Recibe nuestras últimas ofertas y noticias.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Tu Email" className={styles.subscribeInput} required />
            <button type="submit" className={styles.subscribeButton}>Enviar</button>
          </form>
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
