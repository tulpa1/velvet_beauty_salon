// src/pages/GalleryPage.jsx
import React from 'react';
// import styles from '../styles/modules/GalleryPage.module.css'; // Si decides modularizar

/**
 * Componente de la página de galería.
 * Mostrará una colección de imágenes de trabajos realizados por el salón.
 */
function GalleryPage() {
  // Array de imágenes de ejemplo para la galería
  const galleryImages = [
    { id: 1, src: "https://placehold.co/400x300/ff69b4/ffffff?text=Trabajo+1", alt: "Corte y color" },
    { id: 2, src: "https://placehold.co/400x300/e05c9f/ffffff?text=Trabajo+2", alt: "Uñas acrílicas" },
    { id: 3, src: "https://placehold.co/400x300/ff69b4/ffffff?text=Trabajo+3", alt: "Peinado de fiesta" },
    { id: 4, src: "https://placehold.co/400x300/e05c9f/ffffff?text=Trabajo+4", alt: "Tratamiento capilar" },
    { id: 5, src: "https://placehold.co/400x300/ff69b4/ffffff?text=Trabajo+5", alt: "Diseño de uñas" },
    { id: 6, src: "https://placehold.co/400x300/e05c9f/ffffff?text=Trabajo+6", alt: "Maquillaje" },
  ];

  return (
    <section className="section-padding text-center">
      <div className="container">
        <h2>Nuestra Galería</h2>
        <p>Explora algunos de nuestros trabajos más recientes y déjate inspirar.</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: 'var(--spacing-large)'
        }}>
          {galleryImages.map(image => (
            <div key={image.id} style={{
              borderRadius: 'var(--border-radius-base)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-light)',
              transition: 'transform 0.3s ease'
            }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <p style={{ padding: '10px', fontSize: '0.9em', color: 'var(--text-medium)' }}>{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
