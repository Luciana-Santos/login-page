import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Socials from '../components/Socials';
import Titulo from '../components/Titulo';
import stylesButton from '../components/Button.module.css';
import styles from './Login.module.css';

const CreateAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sign up');
  };

  return (
    <section className={styles.loginInfo}>
      <div className="animaLeft">
        <Titulo title="Create Account" />
        <Socials />
        <form onSubmit={handleSubmit}>
          <Input placeholder="Name" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />

          <div className={styles.buttonContainer}>
            <Button>Sign Up</Button>
            <Link
              to="/"
              className={stylesButton.button}
              style={{
                backgroundColor: '#fff',
                borderColor: '#ffc46b',
                color: '#ffc46b',
              }}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
