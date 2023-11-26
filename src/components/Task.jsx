export const Task = (props) => {

const {name} = props;
    return (
        <>
        <li>{name}</li> 
        <button>!</button> 
        <button>x</button>
        </>
        );
};