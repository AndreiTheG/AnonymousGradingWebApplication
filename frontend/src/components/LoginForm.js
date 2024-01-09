// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      onLogin(response.data);
    } catch (error) {
      console.error('Eroare la autentificare:', error);
    }
  };

  return (
    <div>
      <h2>Autentificare</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Autentificare</button>
    </div>
  );
};

export default Login;
