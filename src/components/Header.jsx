// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Header.module.css'; // Importa el módulo CSS

/**
 * Componente del encabezado (Header).
 * Contiene el logo/título del salón y la navegación principal, con un menú de hamburguesa para móviles.
 */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú móvil (llamada al hacer clic en un enlace o en el fondo)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Contenedor del Logo y Título */}
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink} onClick={closeMobileMenu} aria-label="Ir a la página de inicio">
          {/* Si usas una imagen de logo, podrías ponerla aquí: */}
          {/* <img src="/path/to/your/logo.png" alt="Velvet Beauty Salon Logo" className={styles.logo} /> */}
          
          {/* Si usas la lógica .logoText para "Velvet Beauty Salon" dividido, descomenta y ajusta: */}
          {/* <div className={styles.logo}>
            <span className={styles.logoText}>VELVET</span>
            <span className={styles.logoText}>BEAUTY SALON</span>
          </div> */}

          {/* Si usas un solo <h1> para el título, como en la mayoría de los ejemplos: */}
          <h1 className={styles.salonTitle}>Velvet Beauty Salon</h1>
        </Link>
      </div>

      {/* Botón de Hamburguesa (visible solo en móviles) */}
      <button className={styles.hamburgerButton} onClick={toggleMobileMenu} aria-label="Abrir/cerrar menú de navegación">
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

      {/* Fondo oscuro que cubre la pantalla cuando el menú móvil está abierto */}
      {isMobileMenuOpen && (
        <div className={styles.mobileBackdrop} onClick={closeMobileMenu}></div>
      )}

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
