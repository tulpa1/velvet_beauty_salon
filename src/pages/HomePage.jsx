// src/pages/HomePage.jsx
import React from 'react';
// Importa el módulo CSS para esta página (si lo creas) o usa estilos globales
// import styles from '../styles/modules/HomePage.module.css';

/**
 * Componente de la página de inicio.
 * Muestra una bienvenida, un eslogan y un llamado a la acción.
 */
function HomePage() {
  return (
    <section className="section-padding text-center"> {/* Usando clases globales */}
      <div className="container">
        <h1>Bienvenido a Velvet Beauty Salon</h1>
        <p>Donde la belleza y el bienestar se encuentran.</p>
        <p>Descubre nuestros servicios exclusivos y déjate consentir por nuestros expertos.</p>
        {/* Puedes añadir un botón para navegar a servicios o citas */}
        <a href="/servicios" className="btn-primary" style={{ marginTop: '30px' }}>
          Explora Nuestros Servicios
        </a>
        {/* Placeholder para una imagen o banner */}
        <div style={{ marginTop: '50px' }}>
          <img
            src="https://placehold.co/800x400/ff69b4/ffffff?text=Bienvenida+Velvet+Beauty"
            alt="Bienvenida a Velvet Beauty Salon"
            style={{ borderRadius: '10px', boxShadow: 'var(--shadow-light)' }}
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
