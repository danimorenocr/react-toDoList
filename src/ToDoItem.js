import { CompletedIcon } from "./CompletedIcon.js";
import { DeletedIcon } from "./DeleteIcon.js";
import "./ToDoItem.css";
function ToDoItem(props) {
  return (
    <li className="TodoItem">
      <CompletedIcon
        completed={props.completed}
        onCompleted={props.onCompleted}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>
      <DeletedIcon onDelete={props.onDelete} />
    </li>
  );
}

export { ToDoItem };
