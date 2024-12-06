import "./ToDoItem.css";
function ToDoItem(props) {
  return (
    <li className="TodoItem">
      <span
        // Comillas invertidas para hacer los estilos dinamicos
        // Si la propiedad q viene del app es verdadera se activa el css
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        v
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { ToDoItem };
