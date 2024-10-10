function ToDoList({ children }) {
// children: todo lo que este dentro del componente del App.js lo toma como hijos
  return <ul>{children}</ul>;
}

// EXPORTAR PARA Q RENDERICE
export { ToDoList };
// IMPORTAR EN APP.JS COMO OBJETO
