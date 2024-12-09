import "./CreateToDoButton.css";
function CreateToDoButton() {
  return (
    // on Es cualquier evento
    // ingresa una funcion para q funcione el evento "() =>""
    <button
      className="create-btn"
      onClick={(event) => {
        console.log("Click al botón");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
