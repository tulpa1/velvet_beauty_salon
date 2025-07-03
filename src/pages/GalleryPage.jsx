// src/pages/GalleryPage.jsx
import React from 'react';
import styles from '../styles/modules/GalleryPage.module.css'; // Importa el módulo CSS para esta página
import { Link } from 'react-router-dom'; // Para el botón de navegación si se añade

/**
 * Componente de la página de galería.
 * Muestra una colección elegante de imágenes de trabajos realizados por el salón.
 */
function GalleryPage() {
  // Array de imágenes de ejemplo para la galería
  const galleryImages = [
    { id: 1, src: "https://placehold.co/400x300/2c2c2c/d4af37?text=Corte+Moderno", alt: "Corte de cabello moderno con mechas" },
    { id: 2, src: "https://placehold.co/400x300/1a1a1a/f0f0f0?text=Unas+Acrilicas", alt: "Diseño de uñas acrílicas con detalles plateados" },
    { id: 3, src: "https://placehold.co/400x300/2c2c2c/b8860b?text=Tinte+Elegante", alt: "Tinte de cabello oscuro con reflejos dorados" },
    { id: 4, src: "https://placehold.co/400x300/1a1a1a/d4af37?text=Peinado+Fiesta", alt: "Peinado recogido elegante para evento" },
    { id: 5, src: "https://placehold.co/400x300/2c2c2c/f0f0f0?text=Manicura+Gel", alt: "Manicura con esmalte permanente color plata" },
    { id: 6, src: "https://placehold.co/400x300/1a1a1a/b8860b?text=Tratamiento+Capilar", alt: "Cabello brillante después de tratamiento de queratina" },
    { id: 7, src: "https://placehold.co/400x300/2c2c2c/d4af37?text=Pedicura+Lujo", alt: "Pedicura de lujo con esmaltado oscuro" },
    { id: 8, src: "https://placehold.co/400x300/1a1a1a/f0f0f0?text=Extensiones", alt: "Extensiones de cabello natural y voluminoso" },
    { id: 9, src: "https://placehold.co/400x300/2c2c2c/b8860b?text=Corte+Hombre", alt: "Corte de cabello masculino con estilo" },
  ];

  return (
    <section className={`${styles.galleryPage} section-padding`}>
      <div className="container">
        <h2 className={styles.pageTitle}>Nuestra Galería de Trabajos</h2>
        <p className={styles.pageSubtitle}>
          Explora la excelencia y el arte en cada detalle. Aquí te presentamos una muestra de nuestras creaciones más recientes.
        </p>

        <div className={styles.galleryGrid}>
          {galleryImages.map(image => (
            <div key={image.id} className={styles.galleryItem}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.galleryImage}
              />
              <div className={styles.imageOverlay}>
                <p className={styles.imageDescription}>{image.alt}</p>
                {/* Puedes añadir un botón para ver más detalles si cada imagen tuviera una página */}
                {/* <Link to={`/galeria/${image.id}`} className={styles.viewDetailsButton}>Ver Detalles</Link> */}
              </div>
            </div>
          ))}
        </div>
        {/* Opcional: Botón para cargar más imágenes o ir a una sección de "todos los trabajos" */}
        {/* <div className="text-center" style={{ marginTop: 'var(--spacing-large)' }}>
          <Link to="/todos-los-trabajos" className="btn-primary">Ver Más Trabajos</Link>
        </div> */}
      </div>
    </section>
  );
}

export default GalleryPage;
