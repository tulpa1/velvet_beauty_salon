// src/pages/AboutPage.jsx
import React from 'react';
// import styles from '../styles/modules/AboutPage.module.css'; // Si decides modularizar

/**
 * Componente de la página "Sobre Nosotros".
 * Proporciona información sobre el salón, su historia y su filosofía.
 */
function AboutPage() {
  return (
    <section className="section-padding text-center">
      <div className="container">
        <h2>Sobre Velvet Beauty Salon</h2>
        <p>
          En Velvet Beauty Salon, nuestra pasión es realzar tu belleza natural y proporcionarte una experiencia de cuidado personal inigualable.
          Desde nuestra apertura en [Año de Fundación], nos hemos dedicado a ofrecer servicios de alta calidad en un ambiente de lujo y relajación.
        </p>
        <p>
          Nuestro equipo de estilistas y técnicos de belleza altamente capacitados está siempre al tanto de las últimas tendencias y técnicas
          para asegurar que recibas el mejor servicio posible. Utilizamos solo productos de primera calidad para garantizar resultados excepcionales
          y el cuidado óptimo de tu cabello, piel y uñas.
        </p>
        <p>
          Creemos que cada visita a nuestro salón debe ser un escape, un momento para ti. Te invitamos a relajarte, rejuvenecer y salir sintiéndote
          renovado y radiante. ¡Tu belleza es nuestra inspiración!
        </p>
        <div style={{ marginTop: '50px' }}>
          <img
            src="https://placehold.co/600x350/ff69b4/ffffff?text=Nuestro+Salon"
            alt="Interior de Velvet Beauty Salon"
            style={{ borderRadius: '10px', boxShadow: 'var(--shadow-light)' }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
