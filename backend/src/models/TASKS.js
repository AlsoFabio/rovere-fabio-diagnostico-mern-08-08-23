const { model, Schema } = require('mongoose')

const tarea = new Schema(
    {
        nombre:{
            type:String,
            require:true,
            
        },
        descripcion:{
            type:String,
            require:true
        },
        estado:{
            type:Boolean,
            default:false
        },
        visible:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports= model('tarea',tarea)