import React from 'react';

const Input = ({ placeholder, type, ...props }) => {
  return (
    <form>
      <input type={type} placeholder={placeholder} />
    </form>
  );
};

export default Input;
