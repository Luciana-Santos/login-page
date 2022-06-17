import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, type, onChange, ...props }) => {
  return (
    <>
      <input
        className={styles.input}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
