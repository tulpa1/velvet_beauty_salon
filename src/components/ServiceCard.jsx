// src/components/ServiceCard.jsx
import React from 'react';
import styles from '../styles/modules/ServiceCard.module.css';

function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className={styles.serviceCard}>
      <img src={imageUrl} alt={title} className={styles.serviceCardImage} />
      <div className={styles.serviceCardContent}>
        {/* Usamos las clases como antes, pero la fuente del estilo cambió */}
        <h3 className={styles.serviceCardTitle}>{title}</h3>
        <p className={styles.serviceCardDescription}>{description}</p>
        <button className={styles.serviceCardButton}>Ver más</button>
      </div>
    </div>
  );
}

export default ServiceCard;