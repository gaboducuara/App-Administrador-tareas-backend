const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./model/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors')
// const env = require('./.env')

//inicia aplicacion
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/tasks' , taskRoutes);
// //Rutas Api
// app.get('/', (req, res) => {
//   res.send('Estamos en casa');
// });

connectDB();
// const PORT = process.env.PORT || 5173;
const PORT = process.env.URL || 5000;
app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
