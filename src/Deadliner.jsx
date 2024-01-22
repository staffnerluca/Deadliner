import { useState } from "react";
import {Task} from "./Task"
import "./Deadliner.css"


export function Deadliner(){
    const [taskList, setTaskList] = useState([])
    let counter = 0
    
    
    function addTask(){
        console.log("added");
        setTaskList(prev => [...prev, <Task key={taskList.length} id={taskList.length} />]);
        counter +=1;
    }


    function removeTask(){
        setTaskList(l => l.slice(0, -1));
    }


    function RenderTaskList(){
        return(
            <div>
                {taskList}
            </div>
        )
    }


    function calculateAllDeadlines(){
        //TODO not working jet
        taskList.forEach(task => console.log(typeof task.calculateDeadline))
    }
    

    return (
        <div className="centeredDiv">
          <div>
            <center><h1>Deadliner</h1></center>
            <center><button onClick={addTask}>+</button>
            <button onClick={removeTask}>-</button></center>
      
            {RenderTaskList()}
            <br></br>
            <button onClick={calculateAllDeadlines}>Calculate all deadlines</button>
          </div>
        </div>
      );
}