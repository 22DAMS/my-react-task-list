import { Task } from "./Task";

export const TaskList = (props) => {

    function handleClick() {
            console.log("Add task")
        }

    const { list } = props;

        return (
        <>
        <input placeholder="New Task"></input>
        <button onClick={handleClick}>+</button>
        <ul>
            {
                list.map((task) => (<Task name={task.name}/>))
            }            
        </ul>
        <button>Clear All</button>
        
        </>
    );
}