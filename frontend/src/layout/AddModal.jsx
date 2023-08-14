import React from 'react'
import { agregarDatos } from '../libreria/connecciones';

const AddModal = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const description = formData.get("descripcion");
        const title = formData.get("nombre");
        agregarDatos(title, description)
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="">Nombre</label>
                <input type="text" name='nombre' id='nombre' required /><br />
                <label htmlFor="">Descripcion</label>
                <input type="text" name='descripcion' id='descripcion' required /><br />
                <button type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default AddModal