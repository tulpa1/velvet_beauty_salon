// src/pages/TestimonialsPage.jsx
import React from 'react';
// import styles from '../styles/modules/TestimonialsPage.module.css'; // Si decides modularizar

/**
 * Componente de la página de testimonios.
 * Muestra lo que nuestros clientes satisfechos tienen que decir sobre el salón.
 */
function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "María G.",
      text: "¡Absolutamente encantada con mi nuevo corte y color! El equipo es súper profesional y el ambiente es muy relajante. ¡Volveré pronto!",
      rating: 5
    },
    {
      id: 2,
      name: "Juan P.",
      text: "Excelente servicio de manicura y pedicura. Mis manos y pies quedaron perfectos. Muy recomendable para caballeros también.",
      rating: 5
    },
    {
      id: 3,
      name: "Sofía L.",
      text: "Me hice las uñas acrílicas y el diseño es justo lo que quería. Duraderas y hermosas. ¡Gracias Velvet Beauty!",
      rating: 4
    },
    {
      id: 4,
      name: "Ana R.",
      text: "El tratamiento de queratina dejó mi cabello increíblemente suave y brillante. ¡Adiós frizz! El personal es muy amable.",
      rating: 5
    },
  ];

  return (
    <section className="section-padding text-center">
      <div className="container">
        <h2>Lo que Dicen Nuestros Clientes</h2>
        <p>La satisfacción de nuestros clientes es nuestra mayor recompensa.</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: 'var(--spacing-large)'
        }}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} style={{
              backgroundColor: 'var(--background-white)',
              borderRadius: 'var(--border-radius-base)',
              padding: '25px',
              boxShadow: 'var(--shadow-light)',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"{testimonial.text}"</p>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                <p style={{ fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '5px' }}>- {testimonial.name}</p>
                <div style={{ color: '#FFD700', fontSize: '1.2em' }}>
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
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
