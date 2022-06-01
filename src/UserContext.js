import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
    } catch (error) {}
  };

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
