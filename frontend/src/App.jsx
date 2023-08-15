import { useEffect, useState } from "react";
import "./App.css";
import { completarDatos, eliminarDatos, traerDatos } from "./libreria/connecciones";
import Tareas from "./components/Tareas";
import AddModal from "./layout/AddModal";

function App() {
  const [datos, setDatos] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    traerDatos({ setDatos })
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            hidden ? setHidden(false) : setHidden(true);
          }}
        >
          Agregar tarea
        </button>
        <div hidden={hidden}>
          <AddModal setDatos={setDatos}/>
        </div>
      </div>

      <div>
        <h2>tareas</h2> <br />
        <div>
          {datos.map((dato) => (
            <Tareas
              key={dato._id}
              id={dato._id}
              nombre={dato.nombre}
              descripcion={dato.descripcion}
              estado={dato.estado}
              completar={()=>{completarDatos(dato._id,{setDatos})}}
              eliminar={()=>{eliminarDatos(dato._id,{setDatos})}}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
