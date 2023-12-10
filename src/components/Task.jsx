import { useState } from 'react';
import '../styles/Task.css';

export const Task = (props) => {
  const { title, description, complete, toggleTask, deleteTask, editTask } = props;
  const [newTitle, setNewTitle] = useState(title);

  function handleDelete () {
    if (window.confirm('Are you sure to delete the task?')) {
      deleteTask(title);
    }
  }

  function handleEdit () {
    const newTaskTitle = prompt('Enter new task title', newTitle);
    if (newTaskTitle !== null) {
      setNewTitle(newTaskTitle);
      editTask(title, newTaskTitle);
    }
  }

  return (
    <div className='task-container'>
      <input type='checkbox'
        checked={complete} 
        onChange={() => toggleTask({ title, description, complete, toggleTask })}     
      />
      <div className='title'>{title}</div>
      <button onClick={handleEdit}>!</button>
      <button onClick={handleDelete}>x</button>
    </div>
  );
};


