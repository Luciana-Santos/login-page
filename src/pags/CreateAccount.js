import React from 'react';
import { Link } from 'react-router-dom';
import Titulo from '../components/Titulo';

const CreateAccount = () => {
  return (
    <div>
      <Titulo title="Create Account" />
      <Link to="/">Login</Link>
    </div>
  );
};

export default CreateAccount;
