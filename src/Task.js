import './App.css';
import {FaTrashAlt} from "react-icons/fa";
import {MdDownloadDone} from "react-icons/md";


export const Task=(props)=>{
    return(
        <div className='task' style={{backgroundColor:props.status ? "green" : "Orange"}}>
          <span>{props.taskName}</span>
          <button onClick={()=>props.deleteTask(props.id)}><FaTrashAlt/></button>
          <button onClick={()=>props.completed(props.id)}><MdDownloadDone/></button>
          <br></br>
          </div>
          );
};