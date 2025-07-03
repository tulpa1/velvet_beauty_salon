// src/pages/ServicesPage.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Importa el componente ServiceCard
import styles from '../styles/modules/ServicesPage.module.css'; // Importa el módulo CSS para esta página

// --- Importa tus imágenes de servicios ---
// Asegúrate de que estas rutas sean correctas y las imágenes existan.
// Si no tienes las imágenes, puedes usar placeholders como se muestra.
/*import corteCabelloImg from '../assets/images/corte_cabello.jpg';
import tintesCabelloImg from '../assets/images/tinte_cabello.jpg';
import queratinaImg from '../assets/images/queratina.jpg';
import celulasMadreImg from '../assets/images/celulas_madre.jpg';
import manicuraImg from '../assets/images/manicura.jpg';
import pedicuraImg from '../assets/images/pedicura.jpg';
import unasAcrilicasImg from '../assets/images/unas_acrilicas.jpg';
import pintadoPermanenteImg from '../assets/images/pintado_permanente.jpg';
import reparacionUnasImg from '../assets/images/reparacion_unas.jpg';*/

/**
 * Componente de la página de servicios.
 * Muestra una lista de todos los servicios ofrecidos por el salón con un diseño mejorado.
 */
function ServicesPage() {
  // Datos de los servicios
  const services = [
    {
      title: "Corte de Cabello",
      description: "Transforma tu look con nuestros cortes modernos y clásicos, adaptados a tu estilo personal y tipo de cabello. Incluye lavado y peinado.",
      //imageUrl: corteCabelloImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Corte+Cabello"
    },
    {
      title: "Tintes de Cabello",
      description: "Desde balayage y mechas hasta tintes completos y retoques de raíz. Utilizamos productos de alta calidad para un color vibrante y duradero.",
      //imageUrl: tintesCabelloImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Tintes+Cabello"
    },
    {
      title: "Tratamiento de Queratina",
      description: "Consigue un cabello liso, sin frizz y con un brillo espectacular. Nuestra queratina de última generación nutre y repara profundamente.",
      //imageUrl: queratinaImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Queratina"
    },
    {
      title: "Tratamiento Células Madre",
      description: "Revitaliza tu cabello desde la raíz con nuestro tratamiento de células madre. Fortalece, densifica y promueve un crecimiento saludable.",
     // imageUrl: celulasMadreImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Celulas+Madre"
    },
    {
      title: "Manicura Premium",
      description: "Cuidado completo para tus manos y uñas: limado, pulido, cutículas, masaje hidratante y esmaltado tradicional o permanente.",
      //imageUrl: manicuraImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Manicura"
    },
    {
      title: "Pedicura Relajante",
      description: "Renueva tus pies con nuestra pedicura spa. Incluye exfoliación, remoción de durezas, masaje y esmaltado para pies suaves y hermosos.",
     // imageUrl: pedicuraImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Pedicura"
    },
    {
      title: "Uñas Acrílicas Personalizadas",
      description: "Diseños únicos y extensiones duraderas. Desde lo clásico hasta lo más vanguardista, creamos las uñas de tus sueños.",
     // imageUrl: unasAcrilicasImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Unas+Acrilicas"
    },
    {
      title: "Esmaltado Permanente (Gelish)",
      description: "Disfruta de uñas impecables por semanas con nuestro esmaltado de gel de alta durabilidad y brillo intenso. Amplia gama de colores.",
     // imageUrl: pintadoPermanenteImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Pintado+Permanente"
    },
    {
      title: "Reparación y Retiro de Uñas",
      description: "Servicio profesional para reparar uñas acrílicas dañadas o retirarlas de forma segura y cuidadosa, protegiendo tu uña natural.",
     // imageUrl: reparacionUnasImg || "https://placehold.co/350x200/2c2c2c/d4af37?text=Reparacion+Retiro"
    },
  ];

  return (
    <section className={`${styles.servicesPage} section-padding`}> {/* Usando clase global para padding */}
      <div className="container">
        <h2 className={styles.pageTitle}>Nuestros Servicios Exclusivos</h2>
        <p className={styles.pageSubtitle}>
          En Velvet Beauty Salon, cada servicio es una experiencia de lujo diseñada para tu bienestar y belleza.
        </p>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
