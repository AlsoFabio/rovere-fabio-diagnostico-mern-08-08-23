const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const port=3000;
const app=express();

const db = require('./src/db/db')

// db({uri:'mongodb://localhost:27017/tarea'})
db({uri:'mongodb+srv://alsofabio:1234@queso.u03ucr0.mongodb.net/tarea'})

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

app.use(require('./src/routes/tasks.routes.js'))


app.listen(port,()=>console.log(`server corriendo en el puerto:${port}`))