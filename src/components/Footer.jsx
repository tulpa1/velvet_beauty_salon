// src/components/Footer.jsx

import React from 'react';
// import styles from '../styles/modules/Footer.module.css'; // Si decides modularizar

/**
 * Componente del pie de página (Footer).
 * Contiene información de contacto, derechos de autor y enlaces a redes sociales.
 */
function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: 'var(--spacing-large) var(--spacing-medium)',
      textAlign: 'center',
      marginTop: 'auto' // Esto empuja el footer al final de la página si el contenido es corto
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Velvet Beauty Salon. Todos los derechos reservados.</p>
        <div style={{ marginTop: 'var(--spacing-small)', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="/privacidad" style={{ color: 'white', textDecoration: 'none' }}>Política de Privacidad</a>
          <a href="/terminos" style={{ color: 'white', textDecoration: 'none' }}>Términos y Condiciones</a>
        </div>
        <div style={{ marginTop: 'var(--spacing-medium)' }}>
          <a href="https://facebook.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5em', margin: '0 10px' }}>
            <span role="img" aria-label="Facebook">📘</span>
          </a>
          <a href="https://instagram.com/velvetbeautysalon" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.5em', margin: '0 10px' }}>
            <span role="img" aria-label="Instagram">📸</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // <-- ¡Esta línea es crucial!