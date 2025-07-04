// src/App.jsx
import React, {use, useEffect} from 'react';
// Importa los componentes de enrutamiento de React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa los componentes de diseño comunes (Header y Footer)
import Header from './components/Header';
import Footer from './components/Footer';

// Importa los componentes de cada página
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Import your Firebase db instance
import { db } from './firebaseConfig';

/**
 * Componente principal de la aplicación.
 * Define las rutas para la navegación entre las diferentes páginas del salón de belleza.
 */
function App() {
  useEffect(() => {
      if (db) {
      console.log('Firebase db instance is available:', db);
      console.log('Firebase app name:', db.app.name);
    } else {
      console.error('Firebase db instance is NOT available!');
    }
  }, []);


  return (
    // Router envuelve toda la aplicación para habilitar el enrutamiento
    <Router basename="/velvet_beauty_salon" >
      {/* El Header se muestra en todas las páginas */}
      <Header />

      {/* El elemento <main> contendrá el contenido de la página actual.
          flex-grow: 1 en global.css asegura que ocupe el espacio restante. */}
      <main>
        {/* Routes define las diferentes rutas de la aplicación */}
        <Routes>
          {/* Route para la página de inicio. path="/" significa la ruta raíz. */}
          <Route path="/" element={<HomePage />} />

          {/* Route para la página de servicios */}
          <Route path="/servicios" element={<ServicesPage />} />

          {/* Route para la galería de trabajos */}
          <Route path="/galeria" element={<GalleryPage />} />

          {/* Route para la página de testimonios */}
          <Route path="/testimonios" element={<TestimonialsPage />} />

          {/* Route para la página "Sobre Nosotros" */}
          <Route path="/nosotros" element={<AboutPage />} />

          {/* Route para la página de contacto */}
          <Route path="/contacto" element={<ContactPage />} />

          {/* Puedes añadir una ruta para un error 404 si lo deseas:
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>

      {/* El Footer se muestra en todas las páginas */}
      <Footer />
    </Router>
  );
}

export default App;
