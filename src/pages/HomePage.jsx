// src/pages/HomePage.jsx
import React from 'react';
import styles from '../styles/modules/HomePage.module.css'; // Importa el módulo CSS para esta página
import { Link } from 'react-router-dom'; // Para el botón de navegación

/**
 * Componente de la página de inicio.
 * Muestra una bienvenida elegante, un eslogan y un llamado a la acción.
 */
function HomePage() {
  return (
    <section className={styles.homePage}>
      {/* Sección Hero: La parte más destacada de la página de inicio */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Velvet Beauty Salon</h1>
          <p className={styles.heroSubtitle}>Donde la elegancia se encuentra con el bienestar.</p>
          <p className={styles.heroDescription}>
            Descubre un oasis de belleza y relajación. Nuestros expertos están dedicados a realzar tu estilo
            con servicios exclusivos para cabello, uñas y más.
          </p>
          <Link to="/servicios" className="btn-primary">
            Explora Nuestros Servicios
          </Link>
        </div>
      </div>

      {/* Sección de Introducción/Filosofía */}
      {/*<div className={`${styles.introSection} section-padding text-center`}>
        <div className="container">
          <h2>Tu Destino para la Belleza y el Cuidado Personal</h2>
          <p>
            En Velvet Beauty Salon, cada visita es una experiencia única. Nos enorgullece ofrecer un ambiente
            sofisticado y servicios personalizados que superan tus expectativas. Ven y déjate consentir.
          </p>
        </div>
      </div>*/}

      {/* Sección Destacados (opcional, puedes añadir más contenido aquí) */}
      <div className={`${styles.highlightsSection} section-padding text-center`}>
        <div className="container">
          <h2>Servicios Destacados</h2>
          <div className={styles.highlightCards}>
            <div className={styles.highlightCard}>
              <h3>Transformación Capilar</h3>
              <p>Expertos en cortes, tintes y tratamientos de queratina para un cabello deslumbrante.</p>
              <Link to="/servicios" className={styles.smallLink}>Ver más</Link>
            </div>
            <div className={styles.highlightCard}>
              <h3>Manicura y Pedicura de Lujo</h3>
              <p>Cuidado meticuloso para tus manos y pies, con esmaltados permanentes y diseños únicos.</p>
              <Link to="/servicios" className={styles.smallLink}>Ver más</Link>
            </div>
            <div className={styles.highlightCard}>
              <h3>Uñas Acrílicas Artísticas</h3>
              <p>Diseños personalizados y reparaciones expertas para unas uñas perfectas.</p>
              <Link to="/servicios" className={styles.smallLink}>Ver más</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
