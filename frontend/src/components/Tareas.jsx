import React from 'react'

const Tareas = ({id,nombre,descripcion,estado,eliminar,completar}) => {

  return (
    <div id={id} style={{textAlign:'left'}}>
      <p>nombre: {nombre}</p>
      <p>descripcón: {descripcion}</p>
      <p>estado: {estado?'completado':'incompleto'}</p>
      <button onClick={completar}>{estado?'descompletar':'completar'}</button>
      <button onClick={eliminar}>eliminar</button>
    </div>
  )
}

export default Tareas