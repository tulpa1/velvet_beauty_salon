// src/components/Header.jsx
import React, { useState } from 'react'; // Importa useState para manejar el estado del menú
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Header.module.css'; // Importa el módulo CSS para el Header

/**
 * Componente del encabezado (Header).
 * Contiene el logo del salón, la navegación principal y un menú de hamburguesa para móviles.
 */
function Header() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú móvil cuando se hace clic en un enlace
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Contenedor del Logo */}
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink} onClick={closeMobileMenu}>
          <img
            src="https://placehold.co/50x50/ff69b4/ffffff?text=Logo" // Placeholder para el logo
            alt="Velvet Beauty Salon Logo"
            className={styles.logo}
          />
          <h1 className={styles.salonTitle}>Velvet Beauty Salon</h1>
        </Link>
      </div>

      {/* Botón de Hamburguesa (visible solo en móviles) */}
      <button className={styles.hamburgerButton} onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
        {/* Icono de hamburguesa simple con SVG */}
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            // Icono de "X" cuando el menú está abierto
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            // Icono de hamburguesa cuando el menú está cerrado
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Navegación Principal (escritorio) y Menú Móvil (cajón) */}
      <nav className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navLink} onClick={closeMobileMenu}>Inicio</Link></li>
          <li><Link to="/servicios" className={styles.navLink} onClick={closeMobileMenu}>Servicios</Link></li>
          <li><Link to="/galeria" className={styles.navLink} onClick={closeMobileMenu}>Galería</Link></li>
          <li><Link to="/testimonios" className={styles.navLink} onClick={closeMobileMenu}>Testimonios</Link></li>
          <li><Link to="/nosotros" className={styles.navLink} onClick={closeMobileMenu}>Nosotros</Link></li>
          <li><Link to="/contacto" className={styles.navLink} onClick={closeMobileMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
