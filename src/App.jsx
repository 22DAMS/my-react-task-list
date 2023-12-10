import "./App.css";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react";

function App() {
  const [taskItems, setTaskItems] = useState([
    // { title: "Example", description: "Example", complete: false },
  ]);

  function createNewTask(taskTitle) {
    if (!taskItems.find((task) => task.title === taskTitle)) {
      setTaskItems([
        ...taskItems,
        { title: taskTitle, description: taskTitle, complete: false },
      ]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(taskItems.map((t) => (t.title == task.title ? {...t, complete: !t.complete} : t )));
  }

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => { 
    setTaskItems(taskItems.filter(task => !task.complete))
  }

  const deleteTask = (taskTitle) => {
    setTaskItems(taskItems.filter(task => task.title !== taskTitle))
    
  };

  const editTask = (oldTitle, newTitle) => {
    setTaskItems(taskItems.map((task) => task.title === oldTitle ? {...task, title: newTitle} : task))
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <>
      <Header />
      <TaskList 
      createNewTask={createNewTask} 
      list={taskItems} 
      toggleTask={toggleTask} 
      cleanTasks={cleanTasks} 
      deleteTask={deleteTask}
      editTask={editTask}/>
    </>
  );
}

export default App;
