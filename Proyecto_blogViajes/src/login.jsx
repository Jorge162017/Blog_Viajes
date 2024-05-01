import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate();
  const [correo_electronico, setCorreo] = useState('');
  const [contraseña, setContrasena] = useState('');
  const [error] = useState('');

  // Esta función podría ser parte de tu función handleLogin
// Suponiendo que estás en el contexto del componente Login

const generateClientSideToken = () => {
    // Ejemplo simple de generación de un token
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const contraseña_hash = await hashPassword(contraseña);
    
  
    try {
      const response = await fetch('http://44.202.104.77/api/22103/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo_electronico: correo_electronico, contraseña_hash: contraseña_hash }),
      });
  
      if (response.ok) {
        // Generar un token del lado del cliente (esto es solo para desarrollo)
        const token = generateClientSideToken();
  
        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', token);
  
        // Proceder con la lógica de navegación dependiendo del rol
        const data = await response.json();
        console.log('Datos de usuario:', data);
        navigate(`/${data.rol}`);
        // ... resto de tu lógica ...
      } else {
        // Manejar errores como credenciales incorrectas o errores del servidor
      }
    } catch (error) {
      // Manejar excepciones de la solicitud fetch o la lógica de hashing
    }
  };
  
  
  
  
  const hashPassword = async (password) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    console.log('Contraseña encriptada:', hashedPassword); 
    console.log('Correo:', correo_electronico);
    return hashedPassword;
  };

    return (
        <div className='login-page'>
      
      <div className='wrapper'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <div className='error'>{error}</div>}
          <div className='input-box'>
            <input type='email' placeholder='Email' value={correo_electronico} onChange={(e) => setCorreo(e.target.value)} required />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' value={contraseña} onChange={(e) => setContrasena(e.target.value)} required />
            <FaLock className='icon' />
          </div>
          <button className='button' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
    );
}

export default Login;