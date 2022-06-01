import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, type, ...props }) => {
  return (
    <>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
