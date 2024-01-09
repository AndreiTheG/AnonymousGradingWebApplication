import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProiectList = () => {
  const [proiecte, setProiecte] = useState([]);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const fetchProiecte = async () => {
      try {
        const response = await axios.get('http://localhost:3001/proiecte');
        setProiecte(response.data);
      } catch (error) {
        console.error('Eroare la obținerea listei de proiecte:', error);
      }
    };

    fetchProiecte();
  }, []); // Se va apela doar o dată la încărcarea componentei

  const handleSelecteazaJuriu = async (proiectId) => {
    try {
      const response = await axios.get(`http://localhost:3001/selecteaza-juriu/${proiectId}`);
      setStudentId(response.data.student.id);
    } catch (error) {
      console.error('Eroare la selecția aleatoare a juriului:', error);
    }
  };

  return (
    <div>
      <h2>Listă Proiecte</h2>
      <ul>
        {proiecte.map((proiect) => (
          <li key={proiect.id}>
            <p>{proiect.videoclip}</p>
             {/* <video width="320" height="240" controls>
              <source src={proiect.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            {proiect.numeProiect}
            <button onClick={() => handleSelecteazaJuriu(proiect.id)} disabled={studentId !== null}>
              Selectează Juriu
            </button>
            {studentId && (
              <button onClick={() => setStudentId(null)}>Anulează Selecția</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProiectList;
