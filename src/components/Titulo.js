import React from 'react';
import styles from './Titulo.module.css';

const Titulo = ({ title }) => {
  return <h1 className={styles.titulo}>{title}</h1>;
};

export default Titulo;
