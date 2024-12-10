import { TodoIcon } from "./TodoIcon";
function CompletedIcon({ completed, onCompleted }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      onClick={onCompleted}
    />
  );
}

export { CompletedIcon };
