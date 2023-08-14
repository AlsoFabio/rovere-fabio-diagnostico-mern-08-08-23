const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const port=3000;
const app=express();

const db = require('./src/db/db')

db({uri:'mongodb://localhost:27017/tarea'})

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

app.use(require('./src/routes/tasks.routes.js'))


app.listen(port,()=>console.log(`server corriendo en el puerto:${port}`))