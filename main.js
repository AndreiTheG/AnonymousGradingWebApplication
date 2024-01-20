// // Exemplu de cod pentru adăugarea unui proiect
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// let proiecte = []; // Array pentru stocarea proiectelor

// app.post('/adauga-proiect', (req, res) => {
//   const { numeProiect, livrabilePartiale } = req.body;

//   const proiect = {
//     numeProiect,
//     livrabilePartiale,
//     evaluatori: [], // Lista cu evaluatori
//   };

//   proiecte.push(proiect);
//   res.status(201).json({ succes: true, proiect });
// });

// app.listen(3000, () => {
//   console.log('Serverul rulează pe portul 3000');
// });
