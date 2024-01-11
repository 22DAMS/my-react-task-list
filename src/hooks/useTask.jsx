import { useState, useEffect } from "react";

export default function useTask() {
    const [taskItems, setTaskItems] = useState([
    // { title: "Example", description: "Example", complete: false },
  ]);

  // Función para crear una nueva tarea.
  function createNewTask(taskTitle) {
    if (!taskItems.find((task) => task.title === taskTitle)) {
      setTaskItems([
        ...taskItems,
        { title: taskTitle, description: taskTitle, complete: false },
      ]);
    }
  }

  // Función para completar una tarea.
  function toggleTask(task) {
    setTaskItems(taskItems.map((t) => (t.title == task.title ? { ...t, complete: !t.complete } : t)));
  }
  
  // Función para borrar todas las tareas completas.
  function cleanTasks() {
    setTaskItems(taskItems.filter(task => !task.complete));
  }
  
  // Función para borrar una tarea.
  function deleteTask(taskTitle) {
    setTaskItems(taskItems.filter(task => task.title !== taskTitle));
  }
  
  // Función para editar una tarea.
  function editTask(oldTitle, newTitle) {
    setTaskItems(taskItems.map((task) => task.title === oldTitle ? { ...task, title: newTitle } : task));
  }
  
  // Hook useEffect para cargar información desde localStorage.
  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  // Hook useEffect para actualiza el listado de tareas.
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  return [taskItems, createNewTask, toggleTask, cleanTasks, deleteTask, editTask];
}