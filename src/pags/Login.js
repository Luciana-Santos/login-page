import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import Socials from '../components/Socials';
import Titulo from '../components/Titulo';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div>
      <Titulo title="Login" />
      <Socials />
      <Input placeholder="Username" type="text" />
      <Input placeholder="Password" type="password" />
      <Button>Login</Button>
      <Link to="/create-account">Create Account</Link>
    </div>
  );
};

export default Login;
