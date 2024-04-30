import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PropTypes from 'prop-types';
// Contexto de Autenticación
const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const getUser = () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  };

  useEffect(() => {
    const userData = getUser();
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    // Verificar token
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [navigate, token]);

  // Renderizar 
  return token ? children : null;
};


ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
  };

export default AuthContext;