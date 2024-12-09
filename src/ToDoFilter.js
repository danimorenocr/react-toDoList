import React from "react";
import "./ToDoFilter.css";
function ToDoFilter({searchValue, miSetSearchValue,}) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="custom-input"
        placeholder="Buscar tareas..."
        //El texto de entrada esta atado al estado
        value={searchValue}
        // KEYRELEASED
        onChange={(event) => {
          //EVENT.TARGET.VALUE => caja.getText
          console.log("Escribiste en el input");
          //Pasar el texto recibido al estado
          miSetSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

// EXPORTAR PARA Q RENDERICE
export { ToDoFilter };
// IMPORTAR EN APP.JS COMO OBJETO
