import './App.css'
import Header from './components/Header';
import { TaskList } from './components/TaskList';

const exampleTaskList = [
  { name:"Task1"},
  { name:"Task2"},
  { name:"Task3"},
]

function App() {
  return (
    <>
    <Header />  
    <TaskList  list={exampleTaskList}/>
    </>
  );
}

export default App;
