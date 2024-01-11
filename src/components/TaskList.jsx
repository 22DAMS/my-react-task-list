import { useState } from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const [newTask, setNewTask] = useState("");
  const { taskItems, toggleTask, cleanTasks, deleteTask, editTask } = props;
  
  // Función para el manejo del ingreso de la tarea en el input.
  function handleChange(e) {
    setNewTask(e.target.value);
  }
  
  // Función para el manejo del clic para agregar una nueva tarea.
  function handleClick() {
    props.createNewTask(newTask);
    setNewTask("");
  }
  
  // Función para el manejo de la eliminación de todas las tareas completadas.
  function handleClear () {
    if (window.confirm('Are you sure about deleting tasks?')) {
      cleanTasks();
    }
  }

  // Función para las tablas de tareas completas / incompletas.
  function taskTableRows(completeValue) {
    return (
      taskItems
        .filter(task => task.complete === completeValue)
        .map((task) => (
          <Task key={task.title}
            title={task.title}
            complete={task.complete}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask} />
        ))
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>+</button>
      <table>
        <thead>
          <tr>
            <th>Your pending tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Your completed tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(true)}
        </tbody>
      </table>
      <button onClick={handleClear}>Clear completed tasks</button>
    </>
  );
};
