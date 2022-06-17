import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import Socials from '../components/Socials';
import Titulo from '../components/Titulo';
import stylesButton from '../components/form/Button.module.css';
import styles from './Login.module.css';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    const data = {
      username,
      email,
      password,
    };
    e.preventDefault();
    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const { token } = await response.json();
    console.log('sign up', token);
  }

  return (
    <section className={styles.loginInfo}>
      <div className="animaLeft">
        <Titulo title="Create Account" />
        <Socials />
        <form onSubmit={handleSubmit}>
          <Input
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Name"
            type="text"
            value={username}
          />
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
