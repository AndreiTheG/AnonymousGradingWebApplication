// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { username, password });
      onRegister(response.data);
    } catch (error) {
      console.error('Eroare la înregistrare:', error);
    }
  };

  return (
    <div>
      <h2>Înregistrare</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Înregistrare</button>
    </div>
  );
};

export default Register;
