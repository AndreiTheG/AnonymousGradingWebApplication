import React, { useState } from 'react';
import axios from 'axios';

const ProiectForm = ({ onProiectAdaugat }) => {
  const [numeProiect, setNumeProiect] = useState('');
  const [video, setVideo] = useState(null);

  const handleAdaugaProiect = async () => {
    try {
        const formData = new FormData();
        formData.append('numeProiect', numeProiect);
        formData.append('videoclip', video);
      const response = await axios.post('http://localhost:3001/adauga-proiect', { numeProiect });
      onProiectAdaugat(response.data);
      setNumeProiect('');
      setVideo(null);
    } catch (error) {
      console.error('Eroare la adăugarea proiectului:', error);
    }
  };

  const handleSelecteazaVideo = (e) => {
    setVideo(e.target.files[0]);
  };


  return (
    <div>
      <h2>Adăugare Proiect</h2>
      <label>
        Nume Proiect:
        <input
          type="text"
          value={numeProiect}
          onChange={(e) => setNumeProiect(e.target.value)}
        />
      </label>
      <label>
        Video Demonstrativ:
        <input type="file" accept="video/*" onChange={handleSelecteazaVideo} />
      </label>
      <button onClick={handleAdaugaProiect}>Adaugă Proiect</button>
    </div>
  );
};

export default ProiectForm;
