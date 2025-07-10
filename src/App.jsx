// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiado de BrowserRouter a Router para consistencia
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Import your Firebase db instance
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

import './styles/global.css'; // Global styles

function App() {
  /*useEffect(() => {
    const testFirestoreConnection = async () => {
      try {
        const testCollectionRef = collection(db, 'testCollection');
        const querySnapshot = await getDocs(testCollectionRef);
        console.log('Successfully connected to Firestore and fetched (or attempted to fetch) data.');
        console.log('Number of documents in testCollection:', querySnapshot.docs.length);
      } catch (error) {
        console.error('Error connecting to Firestore or fetching data:', error);
        console.error('Check your Firebase config and Firestore Security Rules.');
      }
    };

    testFirestoreConnection();
  }, []);*/

  return (
    // ¡CAMBIO CLAVE AQUÍ! Elimina el prop basename
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/testimonios" element={<TestimonialsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
