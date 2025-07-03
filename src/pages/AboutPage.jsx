// src/pages/AboutPage.jsx
import React from 'react';
import styles from '../styles/modules/AboutPage.module.css'; // Importa el módulo CSS para esta página
import { Sparkles, Target, Users } from 'lucide-react'; // Iconos para las secciones

/**
 * Componente de la página "Sobre Nosotros".
 * Proporciona información detallada sobre el salón, su historia, misión, visión y equipo.
 */
function AboutPage() {
  return (
    <section className={`${styles.aboutPage} section-padding`}>
      <div className="container">
        <h2 className={styles.pageTitle}>Sobre Velvet Beauty Salon</h2>
        <p className={styles.pageSubtitle}>
          Descubre la esencia de nuestro compromiso con la belleza, la excelencia y la satisfacción de cada cliente.
        </p>

        {/* Sección de Introducción/Nuestra Historia */}
        <div className={`${styles.aboutSection} ${styles.historySection}`}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionTitle}>Nuestra Historia</h3>
            <p>
              Desde nuestra fundación en [Año de Fundación], Velvet Beauty Salon ha sido un referente de elegancia y profesionalismo en el mundo de la belleza.
              Nacimos con la visión de crear un espacio donde cada persona pudiera sentirse única, cuidada y radiante. A lo largo de los años,
              hemos crecido y evolucionado, pero nuestra dedicación a la calidad y al servicio personalizado permanece inquebrantable.
            </p>
            <p>
              Hemos construido una reputación basada en la confianza y la excelencia, gracias a un equipo de estilistas y técnicos apasionados
              que se esfuerzan por superar las expectativas en cada visita.
            </p>
          </div>
          <div className={styles.sectionImage}>
            <img src="https://placehold.co/500x350/2a2a2a/d4af37?text=Nuestro+Inicio" alt="Interior del salón, historia" />
          </div>
        </div>

        {/* Sección de Misión y Visión */}
        <div className={`${styles.aboutSection} ${styles.missionVisionSection}`}>
          <div className={styles.sectionImage}>
            <img src="https://placehold.co/500x350/1a1a1a/f0f0f0?text=Mision+Vision" alt="Concepto de misión y visión del salón" />
          </div>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionTitle}><Target size={30} className={styles.sectionIcon} /> Nuestra Misión</h3>
            <p>
              Ser el oasis de belleza preferido, ofreciendo servicios de alta calidad en un ambiente de lujo y relajación.
              Nos dedicamos a realzar la belleza natural de cada cliente, proporcionando experiencias personalizadas
              que promuevan el bienestar y la confianza.
            </p>
            <h3 className={styles.sectionTitle} style={{ marginTop: 'var(--spacing-large)' }}><Sparkles size={30} className={styles.sectionIcon} /> Nuestra Visión</h3>
            <p>
              Convertirnos en líderes de la industria de la belleza, reconocidos por nuestra innovación,
              excelencia en el servicio y el impacto positivo que generamos en la vida de nuestros clientes
              y en la comunidad.
            </p>
          </div>
        </div>

        {/* Sección de Nuestro Equipo */}
        {/*<div className={`${styles.aboutSection} ${styles.teamSection}`}>
          <h3 className={styles.sectionTitle}><Users size={30} className={styles.sectionIcon} /> Nuestro Equipo</h3>
          <p className={styles.teamSubtitle}>
            Conoce a los profesionales apasionados que hacen posible la magia en Velvet Beauty Salon.
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.teamMemberCard}>
              <img src="https://placehold.co/150x150/b8860b/f0f0f0?text=Estilista1" alt="Estilista Principal" className={styles.memberAvatar} />
              <h4 className={styles.memberName}>[Nombre del Estilista 1]</h4>
              <p className={styles.memberRole}>Estilista Principal</p>
              <p className={styles.memberDescription}>Especialista en cortes modernos y transformaciones de color.</p>
            </div>
            <div className={styles.teamMemberCard}>
              <img src="https://placehold.co/150x150/d4af37/2c2c2c?text=Tecnica1" alt="Técnica de Uñas" className={styles.memberAvatar} />
              <h4 className={styles.memberName}>[Nombre de la Técnica 1]</h4>
              <p className={styles.memberRole}>Técnica de Uñas Experta</p>
              <p className={styles.memberDescription}>Maestra en diseños acrílicos y cuidado integral de uñas.</p>
            </div>
            <div className={styles.teamMemberCard}>
              <img src="https://placehold.co/150x150/f0f0f0/1a1a1a?text=Estilista2" alt="Especialista en Tratamientos" className={styles.memberAvatar} />
              <h4 className={styles.memberName}>[Nombre del Estilista 2]</h4>
              <p className={styles.memberRole}>Especialista en Tratamientos Capilares</p>
              <p className={styles.memberDescription}>Experto en queratina, células madre y recuperación capilar.</p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}

export default AboutPage;
