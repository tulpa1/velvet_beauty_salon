// src/pages/HomePage.jsx
import React, { useState } from 'react';
import styles from '../styles/modules/HomePage.module.css';
import logourl from '../assets/images/iconovv.jpeg';
import { Link } from 'react-router-dom';

// Importa las funciones de Firebase que ya usas en el Footer
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Asegúrate de que esta ruta a tu configuración de Firebase sea correcta

function HomePage() {
  // Estados para manejar el formulario de suscripción, copiados del Footer
  const [subscriptionData, setSubscriptionData] = useState({
    phone: ''
  });
  const [subscriptionStatus, setSubscriptionStatus] = useState(''); // Mensaje de estado (éxito/error/cargando)
  const [isSubscribing, setIsSubscribing] = useState(false); // Estado para el indicador de carga

  // Manejador de cambio para el input del teléfono
  const handlePhoneNumberChange = (e) => {
    setSubscriptionData(prevState => ({
      ...prevState,
      phone: e.target.value // Actualiza solo el campo 'phone'
    }));
  };

  // Manejador de envío del formulario de suscripción (con lógica Firebase)
  const handleSubscribeSubmit = async () => {
    setSubscriptionStatus(''); // Limpiar cualquier mensaje de estado previo

    // Validación básica del número de teléfono
    if (subscriptionData.phone.trim() === '') {
      setSubscriptionStatus('Por favor, ingresa tu número de teléfono para suscribirte.');
      return;
    }

    setIsSubscribing(true); // Activar el estado de carga
    setSubscriptionStatus('Suscribiendo...'); // Mostrar mensaje de carga

    try {
      // Referencia a la colección en Firestore (debe coincidir con la del Footer)
      const subscriptionsCollectionRef = collection(db, 'newsletterSubscriptions'); 
      
      await addDoc(subscriptionsCollectionRef, {
        phone: subscriptionData.phone,
        timestamp: new Date() // Guarda la fecha y hora de la suscripción
      });

      setSubscriptionStatus('¡Gracias por suscribirte! Te mantendremos informado.');
      setSubscriptionData({ phone: '' }); // Limpiar el input después de la suscripción exitosa
      console.log('Suscripción exitosa con el número:', subscriptionData.phone);

    } catch (error) {
      console.error('Error al suscribir el teléfono a Firestore:', error);
      setSubscriptionStatus('Hubo un error al suscribirte. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubscribing(false); // Desactivar el estado de carga
    }
  };

  return (
    <section className={styles.homePage}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src={logourl} alt="Velvet Beauty Salon Logo" className={styles.logohero} />
          
          <div className={styles.heroTextContainer}>
            {/* Título principal del Hero con el nuevo texto */}
            <h1 className={styles.textowelcome}>No te pierdas nuestras promociones</h1>
            
            {/* Formulario de suscripción */}
            {!subscriptionStatus.includes('¡Gracias') ? ( // Muestra el formulario si no hay mensaje de éxito
              <div className={styles.subscribeForm}>
                <input
                  type="tel"
                  placeholder="Ingresa tu número de teléfono"
                  className={styles.phoneNumberInput}
                  value={subscriptionData.phone}
                  onChange={handlePhoneNumberChange}
                  disabled={isSubscribing} // Deshabilitar input mientras se suscribe
                  required // Hace que el campo sea obligatorio
                />
                <button 
                  onClick={handleSubscribeSubmit} // Llama a la función de envío de Firebase
                  className="btn-primary"
                  disabled={isSubscribing} // Deshabilitar botón mientras se suscribe
                >
                  {isSubscribing ? 'Suscribiendo...' : 'Suscribirse'}
                </button>
                {/* Muestra mensajes de error si los hay */}
                {subscriptionStatus && !subscriptionStatus.includes('¡Gracias') && (
                  <p className={styles.errorMessage}>{subscriptionStatus}</p>
                )}
              </div>
            ) : (
              // Mensaje de éxito después de la suscripción
              <p className={styles.subscriptionSuccessMessage}>
                {subscriptionStatus}
              </p>
            )}
          </div>
        </div>
      </div>

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
