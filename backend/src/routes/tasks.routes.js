const routes=require('express').Router()

const {getAll, postOne, deleteOne, completarTarea} = require('../controllers/tasks.controller')

routes.get('/tarea',getAll)
routes.post('/tarea',postOne)
routes.delete('/tarea/:idTarea',deleteOne)
routes.put('/tarea/:idTarea',completarTarea)

module.exports= routes