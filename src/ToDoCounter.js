import "./ToDoCounter.css";
// Importar estilos css

// {nombre_propiedad}  son como parámetros pero de los componentes
function ToDoCounter({ total, completed }) {
  return (
    <h1>
      Has completado <span>{completed}</span> de <span>{total}</span> Tareas
    </h1>
  );
}

// EXPORTAR PARA Q RENDERICE
export { ToDoCounter };
// IMPORTAR EN APP.JS COMO OBJETO
