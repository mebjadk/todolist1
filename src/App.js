import './App.css';
import{useState} from "react";
import {Task} from "./Task";

function App(){

  const [toDoList,setToDoList] = useState([]);
  const [newTask,addNewTask] = useState("");

  const changeHandler=(event)=>{
    addNewTask(event.target.value);
  };

  const addTask= () => {
    const task ={
      id:toDoList.length===0 ? 1 : toDoList[toDoList.length-1].id+1,
      taskName:newTask,
      status:false,
    };
     setToDoList([...toDoList,task]);
  };
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !==id));
  }
  const completed= (id) => {
    setToDoList(
      toDoList.map((task) => {
      if(task.id === id){
        return{...task,status:true};
      } else {
        return task;
      }
    })
    );
  };  
  return (
    <div className='app'>

      <div className='addTask'>
      <input onChange={changeHandler}/>
        <button onClick={addTask}>Insert</button>
         </div>

      <div className='list'>
        {toDoList.map((task)=> {
         return (
         <Task  
         taskName={task.taskName} 
         id={task.id} 
         status={task.status}
         deleteTask={deleteTask} 
         completed={completed}/>
         );
        })}
      </div> 

      </div> 
  );
}

export default App;
