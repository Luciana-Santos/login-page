import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import Socials from '../components/Socials';
import Titulo from '../components/Titulo';
import styles from './Login.module.css';
import stylesButton from '../components/form/Button.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    const data = {
      email,
      password,
    };
    e.preventDefault();
    const response = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const { accessToken } = await response.json();
    console.log('login', accessToken);
  }

  return (
    <section className={styles.loginInfo}>
      <div className="animaLeft">
        <Titulo title="Login" />
        <Socials />
        <form onSubmit={handleSubmit}>
          <Input
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email"
            type="email"
            value={email}
          />
          <Input
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
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
