import { ToDoCounter } from "./ToDoCounter";
import { ToDoFilter } from "./ToDoFilter";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import React from "react";

// Crear un array de tareas el cual se van a invocar en el ToDoItem

const defaultToDos = [
  { text: "Sacar Cédula", completed: false },
  { text: "Consumir API", completed: false },
  { text: "Subir a Git", completed: true },
];

function App() {
  return (
    // El React.Fragment reemplaza el div del app y vuelve eso invisible ya que es necesario q todos los componenetes se
    // envuelvan en un solo fragmento o div

    <React.Fragment>
      {/* ESTRUCUTURA DE COMPONENTES */}
      {/* pasar props  */}

      <ToDoCounter completed={4} total={25} />
      <ToDoFilter />

      <ToDoList>
        {/* Un componente dentro de otro componente */}
        {/* renderizar un ToDoItem por cada tarea del array de tareas  */}

        {defaultToDos.map((tarea) => (
          <ToDoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
