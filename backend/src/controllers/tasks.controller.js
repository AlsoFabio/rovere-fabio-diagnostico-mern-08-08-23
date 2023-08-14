const modeloTarea = require('../models/TASKS')
const ctrl = {};

ctrl.getAll = async (req, res) => {
    try {
        const tareas = await modeloTarea.find({
            visible:true
        })
        return res.json(tareas)
    } catch (error) {
        console.log(error);
    }
}

ctrl.postOne = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const nuevaTarea = new modeloTarea({
            nombre,
            descripcion
        });
        await nuevaTarea.save();
        return res.status(201).json({
            message: 'Tarea Guardada correctamente.'
        });
    } catch (error) {

    }
}

ctrl.deleteOne = async (req, res) => {
    try {
        const idTarea = req.params.idTarea;
        const task = await modeloTarea.findOne({
            $and: [
                {
                    _id: idTarea
                },
                {
                    visible: true
                }
            ]
        });
        if (!task) {
            return res.status(404).json({
                message: 'La tarea no existe.'
            });
        }
        await task.updateOne({
            visible: false
        });
        return res.status(201).json({
            message: 'Tarea eliminada correctamente.'
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}

ctrl.completarTarea = async (req, res) => {
    try {
        const idTarea = req.params.idTarea;
        const task = await modeloTarea.findOne({_id: idTarea});

        if (!task) {
            return res.status(404).json({
                message: 'La tarea no existe.'
            });
        }

        await task.updateOne({
            estado: !task.estado
        });
        return res.status(201).json({
            message: 'Tarea marcada/desmarcada correctamente.'
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}

module.exports = ctrl