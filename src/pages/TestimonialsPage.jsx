// src/pages/TestimonialsPage.jsx
import React from 'react';
import styles from '../styles/modules/TestimonialsPage.module.css'; // Importa el módulo CSS para esta página

/**
 * Componente de la página de testimonios.
 * Muestra lo que nuestros clientes satisfechos tienen que decir sobre el salón con un diseño mejorado.
 */
function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "María G.",
      text: "¡Absolutamente encantada con mi nuevo corte y color! El equipo es súper profesional y el ambiente es muy relajante. ¡Volveré pronto a Velvet Beauty Salon!",
      rating: 5,
      avatar: "https://placehold.co/80x80/d4af37/2c2c2c?text=MG" // Placeholder de avatar
    },
    {
      id: 2,
      name: "Juan P.",
      text: "Excelente servicio de manicura y pedicura. Mis manos y pies quedaron perfectos y me sentí muy cómodo. Muy recomendable para caballeros también.",
      rating: 5,
      avatar: "https://placehold.co/80x80/b8860b/f0f0f0?text=JP"
    },
    {
      id: 3,
      name: "Sofía L.",
      text: "Me hice las uñas acrílicas y el diseño es justo lo que quería, ¡una obra de arte! Duraderas y hermosas. ¡Gracias Velvet Beauty!",
      rating: 4,
      avatar: "https://placehold.co/80x80/f0f0f0/2c2c2c?text=SL"
    },
    {
      id: 4,
      name: "Ana R.",
      text: "El tratamiento de queratina dejó mi cabello increíblemente suave y brillante. ¡Adiós frizz! El personal es muy amable y atento.",
      rating: 5,
      avatar: "https://placehold.co/80x80/d4af37/2c2c2c?text=AR"
    },
    {
      id: 5,
      name: "Carlos M.",
      text: "Un lugar con mucho estilo y profesionalismo. Mi corte de cabello fue impecable y la atención al cliente es de primera. ¡Totalmente satisfecho!",
      rating: 5,
      avatar: "https://placehold.co/80x80/b8860b/f0f0f0?text=CM"
    },
    {
      id: 6,
      name: "Laura V.",
      text: "La pedicura fue una experiencia de relajación total. El ambiente es muy agradable y el resultado en mis pies fue maravilloso. ¡Gracias por el lujo!",
      rating: 4,
      avatar: "https://placehold.co/80x80/f0f0f0/2c2c2c?text=LV"
    },
  ];

  return (
    <section className={`${styles.testimonialsPage} section-padding`}>
      <div className="container">
        <h2 className={styles.pageTitle}>Lo que Dicen Nuestros Clientes</h2>
        <p className={styles.pageSubtitle}>
          La satisfacción de quienes nos eligen es el reflejo de nuestra pasión por la belleza y el servicio de excelencia.
        </p>

        <div className={styles.testimonialsGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                {/* Icono de comillas o similar */}
                <span role="img" aria-label="Quote icon">❝</span>
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.testimonialAuthor}>
                <img src={testimonial.avatar} alt={testimonial.name} className={styles.authorAvatar} />
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <div className={styles.rating}>
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsPage;
