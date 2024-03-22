import { useState } from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleClick() {
    props.createNewTask(newTask);
    setNewTask("");
  }
  
  const { list, toggleTask, cleanTasks, deleteTask, editTask } = props;
  
  const taskTableRows = (completeValue) => {
    return (      
      list
        .filter(task => task.complete === completeValue)
        .map((task) => (
        <Task key={task.title}
        title={task.title} 
        complete = {task.complete}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}/>
      ))
    );
  }

  function handleClear () {
    if (window.confirm('Are you sure about deleting tasks?')) {
      cleanTasks();
    }
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
