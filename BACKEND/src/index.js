require('dotenv').config()
const express = require('express');
const server = express();
server.use(express.json());

//Endpoint para criacao da Tarefa 
const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task',TaskRoutes);

server.listen(3000,()=>{
    console.log("API ONLINE!")
} );


