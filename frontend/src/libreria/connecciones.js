export const urlBase = 'http://localhost:3000'

export const traerDatos = async ({ setDatos }) => {
    const tareasFetch = await fetch(urlBase + '/getTarea', {
        method: 'GET'
    })
    const tareas = await tareasFetch.json();
    setDatos(await tareas)
}
export const agregarDatos = async ( nombre, descripcion ) => {
    const tareasFetch = await fetch(urlBase + '/postTarea', {
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
    return tareas
}
export const eliminarDatos = async () => {

    const tareasFetch = await fetch(urlBase + '/deleteTarea', {
        method: 'PUT'
    })

    
}