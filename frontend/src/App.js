import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ProiectForm from './components/ProiectForm';
import ProiectList from './components/ProiectList';

function App() {
  const handleProiectAdaugat = (proiect) => {
    // Implementați logica pentru actualizarea stării cu noul proiect adăugat
    console.log('Proiect adăugat:', proiect.videoclip);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (data) => {
    if (data.success) {
      setIsLoggedIn(true);
    }
  };

  const handleRegister = (data) => {
    if (data.success) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div> 
       {/* {isLoggedIn ? (
        <h1>Bine ați venit!</h1>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
          <RegisterForm onRegister={handleRegister} />
        </div>
      )} */}
      <ProiectForm onProiectAdaugat={handleProiectAdaugat} />
      <ProiectList />
    </div>
  );
}

export default App;
