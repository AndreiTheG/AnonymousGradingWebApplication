// const express = require('express')
// const cors = require('cors')
// const sqlite3 = require('sqlite3').verbose();
// import { sequelize } from './sequelize.js'
// import { router } from './Routers/router.js'
// import cookieparser from 'cookie-parser';
// import morgan from 'morgan';


// const app = express()
// app.use(express.json()) // The express.json() function is a built-in middleware function in Express.
// // It parses incoming requests with JSON payloads

// app.use(express.urlencoded({ extended: true }))

// app.use(cors());
// app.use(cookieparser());
// app.use('/api', router);

// // Dev logging middleware
// if(process.env.NODE_ENV === 'development')
//     app.use(morgan('dev'));

//  app.listen(5001, async () => {
//   console.log('Express web server running on port 5001')
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established!')
//   } catch (err) {
//     console.err('Unable to connect to the database!', err)
//   }
// })


import express from 'express'
import cors from 'cors'
import { sequelize } from './sequelize.js'
import { router } from './Routers/router.js'
import cookieparser from 'cookie-parser';
import morgan from 'morgan';
// const express = require('express')
const app = express()
const port = 5001;
// const cors = require('cors')
// const sqlite3 = require('sqlite3').verbose();
// const sequelize = require('sequelize');
// const router = require('./Routers/router');
// const cookieparser = require('cookie-parser');
// const morgan = require('morgan')
// import morgan from 'morgan';

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(cors());
app.use(cookieparser());
app.use('/api', router);
app.use(express.json());

app.get("sync", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    // const sampleData = [
    //   {
    //     username: "first-user",
    //     fullName: "john doe",
    //     type: "regular-user",
    //   },
    //   {
    //     username: "second-user",
    //     fullName: "jane doe",
    //     type: "regular-user",
    //   },
    //   {
    //     username: "third-user",
    //     fullName: "alice doe",
    //     type: "power-user",
    //   },
    // ];
    // for (const item of sampleData) {
    //   const user = new User(item);
    //   await user.save();
    // }
    res.status(201).json({ message: "sample db created" });
  } catch (err) {
    next(err);
  }
})

// app.post('/proiectForm', (req, res) => {
//   // Logica de gestionare a request-ului POST
//   const numeProiect = req.body.numeProiect;
//   // ... alte operații
//   res.status(200).json({ success: true, message: 'Proiect adăugat cu succes' });
// });

app.get('/api/v1/auth/me', (req, res) => { 
  // Handle your API logic here 
  res.json({ message: 'Hello from Express!' });
}); 

app.get('/api/v1/projects', (req, res) => { 
  // Handle your API logic here 
  res.json({ message: 'Hello from Express!' });
}); 


if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'));

 app.listen(port, async () => {
  console.log('Express web server running on port 5001')
  try {
    await sequelize.authenticate()
    console.log('Connection has been established!')
  } catch (err) {
    console.err('Unable to connect to the database!', err)
  }
})

// // Alte rute și configurări...

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Serverul ascultă pe portul ${port}`);
// });

// app.use(cors())
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
// });
// app.use(express.json({limit: '10mb'}))

// let db = new sqlite3.Database('creditentials.db', (err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Connected to the access database.')
// })

// app.post('/validatePassword', (req, res) => {
//     const {username, password} = req.body 

//     db.all(`select * from creditentials where username = '${username}' and password='${password}'`, 
//     (err, rows) => {
//         if (err) {
//             throw err;
//         }
//         if (rows.length > 0) {
//             res.send({validation: true})
//         } else {
//             res.send({validation: false})
//         }
//     })
// })

// app.listen(3001, () => console.log('Listening at port 3001'))



// // const express = require('express');
// // const sqlite3 = require('sqlite3');
// // const path = require('path');

// // const app = express();
// // const port = 3001;

// // const dbPath = path.resolve(__dirname, 'database.sqlite');
// // const db = new sqlite3.Database(dbPath);

// // app.use(express.json());

// // const cors = require('cors');
// // const multer = require('multer');

// // // ...

// // // Middleware CORS
// // app.use(cors());

// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //       cb(null, 'uploads/');
// //     },
// //     filename: function (req, file, cb) {
// //       cb(null, Date.now() + path.extname(file.originalname));
// //     }
// // });
  
// // const upload = multer({ storage: storage });

// // // Adăugarea unui video demonstrativ pentru un livrabil parțial
// // app.post('/proiectForm/:livrabilId', upload.single('video'), (req, res) => {
// //     const { livrabilId } = req.params;
// //     const videoPath = req.file.path;
  
// //     if (!livrabilId || !videoPath) {
// //       return res.status(400).json({ error: 'ID livrabil și cale video sunt necesare.' });
// //     }
  
// //     // Salvarea căii video în baza de date pentru livrabilul parțial specificat
// //     db.run('UPDATE LivrabilePartiale SET videoDemonstrativ = ? WHERE id = ?', [videoPath, livrabilId], function (err) {
// //       if (err) {
// //         console.error(err);
// //         return res.status(500).json({ error: 'Eroare la adăugarea video-ului.' });
// //       }
  
// //       res.json({ success: true });
// //     });
// //   });

// // // Definirea schemei bazei de date
// // db.run(`
// //   CREATE TABLE IF NOT EXISTS Proiecte (
// //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     numeProiect TEXT NOT NULL,
// //     videoclip TEXT
// //   )
// // `);


// // // Adăugarea unui proiect
// // app.post('/adauga-proiect', (req, res) => {
// //   const { numeProiect } = req.body;
// //   const videoclipPath = req.file ? req.file.path : null;

// //   if (!numeProiect) {
// //     return res.status(400).json({ error: 'Numele proiectului este obligatoriu.' });
// //   }

// //   if (!videoclipPath) {
// //     return res.status(400).json({ error: 'Videoclipul este obligatoriu.' });
// //   }

// //   db.run('INSERT INTO Proiecte (numeProiect, videoclip) VALUES (?, ?)', [numeProiect], [videoclipPath], function (err) {
// //     if (err) {
// //       console.error(err);
// //       return res.status(500).json({ error: 'Eroare la adăugarea proiectului.' });
// //     }

// //     res.json({ id: this.lastID, numeProiect, videoclipPath });
// //   });
// // });

// // // Obținerea listei de proiecte
// // app.get('/proiecte', (req, res) => {
// //   db.all('SELECT * FROM Proiecte', (err, proiecte) => {
// //     if (err) {
// //       console.error(err);
// //       return res.status(500).json({ error: 'Eroare la obținerea listei de proiecte.' });
// //     }

// //     res.json(proiecte);
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Serverul rulează la http://localhost:${port}`);
// // });

// // // ...

// // // // Obținerea unui student non-MP aleatoriu pentru a face parte din juriu
// // // app.get('/selecteaza-juriu/:proiectId', async (req, res) => {
// // //     console.log('A fost accesată ruta de selecție aleatoare a juriului.');
// // //     const { proiectId } = req.params;
  
// // //     try {
// // //       // Obțineți toți studenții non-MP care nu au fost încă selectați pentru acest proiect
// // //       const result = await db.get(`
// // //         SELECT id, numeStudent
// // //         FROM Studenti
// // //         WHERE id NOT IN (
// // //           SELECT j.idStudent
// // //           FROM Jurii j
// // //           WHERE j.idProiect = ?
// // //         )
// // //         ORDER BY RANDOM()
// // //         LIMIT 1
// // //       `, [proiectId]);
  
// // //       if (result) {
// // //         // Adăugați studentul în juriu
// // //         db.run('INSERT INTO Jurii (idProiect, idStudent) VALUES (?, ?)', [proiectId, result.id]);
  
// // //         res.json({ success: true, student: result });
// // //       } else {
// // //         res.json({ success: false, message: 'Nu există studenți non-MP disponibili pentru acest proiect.' });
// // //       }
// // //     } catch (error) {
// // //       console.error('Eroare la selecția aleatoare a juriului:', error);
// // //       res.status(500).json({ error: 'Eroare la selecția aleatoare a juriului.' });
// // //     }
// // //     res.json({ success: true, student: selectedStudent });
// // //   });

// //   db.run(`
// //   CREATE TABLE IF NOT EXISTS users (
// //     id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     username TEXT UNIQUE,
// //     password TEXT
// //   )
// // `);

// // app.post('/api/register', (req, res) => {
// //   const { username, password } = req.body;

// //   // Adăugați un utilizator în baza de date
// //   db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
// //     if (err) {
// //       return res.status(500).json({ error: 'Eroare la înregistrare.' });
// //     }
// //     res.json({ success: true });
// //   });
// // });

// // app.post('/api/login', (req, res) => {
// //   const { username, password } = req.body;

// //   // Verificați credențialele în baza de date
// //   db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
// //     if (err) {
// //       return res.status(500).json({ error: 'Eroare la autentificare.' });
// //     }

// //     if (!row) {
// //       return res.status(401).json({ error: 'Credențiale incorecte.' });
// //     }

// //     res.json({ success: true });
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Serverul rulează pe portul ${port}`);
// // });