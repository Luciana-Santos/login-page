import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Socials from '../components/Socials';
import Titulo from '../components/Titulo';
import styles from './Login.module.css';
import stylesButton from '../components/Button.module.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('login');
  };

  return (
    <section className={styles.loginInfo}>
      <div className="animaLeft">
        <Titulo title="Login" />
        <Socials />
        <form onSubmit={handleSubmit}>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
          <div className={styles.buttonContainer}>
            <Button>Login</Button>
            <Link
              to="/create-account"
              className={stylesButton.button}
              style={{
                backgroundColor: '#fff',
                borderColor: '#ffc46b',
                color: '#ffc46b',
              }}
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
