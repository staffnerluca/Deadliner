import { useState } from "react";
import {Task} from "./Task"

export function Deadliner(){
    const [taskList, setTaskList] = useState([])
    let counter = 0
    function addTask(){
        console.log("added");
        setTaskList(prev => [...prev, <Task key={taskList.length} />]);
        counter +=1;
    }


    function removeTask(){
        console.log("Removed");
    }

    function RenderTaskList(){
        return(
            <div>
                {taskList}
            </div>
        )
    }

    function calculateAllDeadlines(){
        taskList.forEach(task => task.current.calculateDeadline())
    }
    
    return(
            <div style={{textAlign: "center"}}>
                <h1>Deadliner</h1>
                <button onClick={addTask}>+</button>
                <button onClick={removeTask}>-</button>

                {RenderTaskList()}

                <button onClick={calculateAllDeadlines}>Calculate all deadlines</button>
            </div>
    )
}