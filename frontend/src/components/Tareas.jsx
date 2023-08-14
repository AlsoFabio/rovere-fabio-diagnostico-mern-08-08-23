import React from 'react'

const Tareas = ({id,nombre,descripcion,estado}) => {

  

  return (
    <div id={id}>
      <p>{nombre}</p>
      <p>{descripcion}</p>
      <button>boton de estado</button>
      <button>eliminar</button>
    </div>
  )
}

export default Tareas