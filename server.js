// npm i helmet cors bcrypt jsonwebtoken

// helmet -> Agrega encabezados HTTP: Ej. Conexiones seguras SSL/TLS
// cors -> Permiso para conexión entre servidores
// bcrypt -> Encriptar contraseñas
// jsonwebtoken -> Generar tokens

// ./node_modules/.bin/sequelize migration:create --name CreateTableUsers

// ./node_modules/.bin/sequelize db:migrate
require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet()); // Basic configuration for helmet
app.use(cors()) // Basic configuration for enable CORS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => {
  console.log(`Express on port ${process.env.PORT}`);
});

// git init

// crear .gitignore

// git add .

// git commit -m "primer commit"

// git remote add origin [url-de-github]

// git push -u origin master