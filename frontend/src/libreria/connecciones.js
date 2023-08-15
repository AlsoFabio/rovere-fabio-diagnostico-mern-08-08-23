const urlBase = 'http://localhost:3000'

export const traerDatos = async ({ setDatos }) => {
    const tareasFetch = await fetch(urlBase + '/Tarea', {
        method: 'GET'
    })
    const tareas = await tareasFetch.json();
    setDatos(await tareas)
}
export const agregarDatos = async ( nombre, descripcion,{setDatos} ) => {
    const tareasFetch = await fetch(urlBase + '/Tarea', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            descripcion: descripcion
        })
    })
    const tareas = await tareasFetch.json();
    console.log(tareas)
    traerDatos({setDatos})
}
export const eliminarDatos = async (id,{setDatos}) => {

    const tareasFetch = await fetch(urlBase + '/Tarea/' + id, {
        method: 'DELETE'
    })

    const tareas = await tareasFetch.json();
    traerDatos({setDatos})

}
export const completarDatos = async (id,{setDatos}) => {

    const tareasFetch = await fetch(urlBase + '/Tarea/' + id, {
        method: 'PUT'
    })

    const tareas = await tareasFetch.json();
    traerDatos({setDatos})

}