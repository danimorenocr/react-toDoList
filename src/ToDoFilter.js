import "./ToDoFilter.css";
function ToDoFilter() {
  return (
    <div className="input-container">
      <input
        type="text"
        className="custom-input"
        placeholder="Buscar tareas..."
      />
    </div>
  );
}

// EXPORTAR PARA Q RENDERICE
export { ToDoFilter };
// IMPORTAR EN APP.JS COMO OBJETO
