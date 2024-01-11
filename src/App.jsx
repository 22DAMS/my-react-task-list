import "./App.css";
import Header from "./components/Header";
import { TaskList } from "./components/TaskList";
import useTask from "./hooks/useTask";

function App() {
  const [taskItems, createNewTask, toggleTask, cleanTasks, deleteTask, editTask] = useTask();
  
  return (
    <>
      <Header />
      <TaskList 
      createNewTask={createNewTask} 
      taskItems={taskItems} 
      toggleTask={toggleTask} 
      cleanTasks={cleanTasks} 
      deleteTask={deleteTask}
      editTask={editTask}/>
    </>
  );
}

export default App;
