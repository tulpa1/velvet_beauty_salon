// src/pages/ServicesPage.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
// Importa tus imágenes de servicios
{/*import corteCabelloImg from '../assets/images/corte_cabello.jpg';
import tintesCabelloImg from '../assets/images/tinte_cabello.jpg';
import queratinaImg from '../assets/images/queratina.jpg';
import celulasMadreImg from '../assets/images/celulas_madre.jpg';
import manicuraImg from '../assets/images/manicura.jpg';
import pedicuraImg from '../assets/images/pedicura.jpg';
import unasAcrilicasImg from '../assets/images/unas_acrilicas.jpg';
import pintadoPermanenteImg from '../assets/images/pintado_permanente.jpg';
import reparacionUnasImg from '../assets/images/reparacion_unas.jpg';*/}


function ServicesPage() {
  const services = [
    {
      title: "Corte de Cabello",
      description: "Diseños modernos y clásicos para damas, caballeros y niños.",
     // imageUrl: corteCabelloImg
    },
    {
      title: "Tintes de Cabello",
      description: "Amplia gama de colores y técnicas (balayage, mechas, tintes completos).",
     // imageUrl: tintesCabelloImg
    },
    {
      title: "Queratina",
      description: "Tratamiento para un cabello liso, sin frizz y brillante.",
     // imageUrl: queratinaImg
    },
    {
      title: "Células Madre Capilar",
      description: "Regeneración y fortalecimiento capilar para un cabello sano y revitalizado.",
    //  imageUrl: celulasMadreImg
    },
    {
      title: "Manicura",
      description: "Cuidado completo de tus manos y uñas, con esmaltado tradicional o permanente.",
     // imageUrl: manicuraImg
    },
    {
      title: "Pedicura",
      description: "Relajación y embellecimiento para tus pies, dejándolos suaves y saludables.",
     // imageUrl: pedicuraImg
    },
    {
      title: "Uñas Acrílicas",
      description: "Extensiones y diseños personalizados para unas uñas espectaculares.",
    //  imageUrl: unasAcrilicasImg
    },
    {
      title: "Pintado Permanente de Uñas",
      description: "Esmaltado duradero y de alto brillo que se mantiene impecable por semanas.",
    //  imageUrl: pintadoPermanenteImg
    },
    {
      title: "Reparación y Retiro de Uñas Acrílicas",
      description: "Soluciones rápidas para cualquier daño y retiro seguro para proteger tus uñas naturales.",
    //  imageUrl: reparacionUnasImg
    },
  ];

  return (
    <section className="services-page">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
           // imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;