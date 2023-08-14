const routes=require('express').Router()

const {getAll, postOne, deleteOne, completarTarea} = require('../controllers/tasks.controller')

routes.get('/getTarea',getAll)
routes.post('/postTarea',postOne)
routes.put('/deleteTarea/:idTarea',deleteOne)
routes.put('/marcarTarea/:idTarea',completarTarea)

module.exports= routes