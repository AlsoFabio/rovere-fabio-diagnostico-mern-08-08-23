import { useEffect, useState } from "react";
import "./App.css";
import { traerDatos } from "./libreria/connecciones";
import Tareas from "./components/Tareas";
import AddModal from "./layout/AddModal";

function App() {
  const [datos, setDatos] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {}, [datos]);
  
  traerDatos({ setDatos });

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
          <AddModal />
        </div>
      </div>

      <div>
        tareas <br />
        <div>
          {datos.map((dato) => (
            <Tareas
              key={dato.id}
              id={dato.id}
              nombre={dato.nombre}
              descripcion={dato.descripcion}
              estado={dato.estado}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
