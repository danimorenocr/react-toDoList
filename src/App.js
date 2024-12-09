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
  { text: "Estados Derivados", completed: true },
];

function App() {
  // Estado: Actualiza la informacion dentro del contenido html
  // Estados [miEstado , setMiEstado]
  const [searchValue, setSearchValue] = React.useState("");
  console.log("Buscando " + searchValue);

  //Crear Tareas - tareas es un array
  const [tareas, setTareas] = React.useState(defaultToDos);

  //ESTADOS DERIVADOS
  // Saber cuantas tareas han sido completadas
  //.filter -> Trae un array con todas las tareas q completed = true
  const completedTareas = tareas.filter((tarea) => tarea.completed).length; //.length -> cuenta esas tareas
  const totalTareas = tareas.length;
  const tareasBuscadas = tareas.filter((tarea) => {
    const tareaText = tarea.text.toLowerCase();
    const searchValueText = searchValue.toLowerCase();
    return tareaText.includes(searchValueText);
  });

  return (
    // El React.Fragment reemplaza el div del app y vuelve eso invisible ya que es necesario q todos los componenetes se
    // envuelvan en un solo fragmento o div

    <React.Fragment>
      {/* ESTRUCUTURA DE COMPONENTES */}
      {/* pasar props  */}

      <ToDoCounter completed={completedTareas} total={totalTareas} />
      <ToDoFilter
        // PASAR EL ESTADO COMO PROPIEDAD PARA Q FUNCIONE EN EL OTRO JS
        miPropiedadBuscar={searchValue}
        miSetSearchValue={setSearchValue}
      />

      <ToDoList>
        {/* Un componente dentro de otro componente */}
        {/* renderizar un ToDoItem por cada tarea del array de tareas  */}

        {tareasBuscadas.map((tarea) => (
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
