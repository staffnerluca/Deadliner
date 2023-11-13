import { useState } from 'react'
import ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const tasks = []

function NewTask({id}){
  const btnId = "btn"+id;
  return(
    <div className="divTask">
      <input className="inpName" placeholder={"Name"}></input> 
      <input className="inpUnit" placeholder={"Unit"}></input>
      <input className="inpCheckbox" type="checkbox"></input> Only on work days 
      <input type="checkbox"></input> The same every day 
      <button id={btnId} onClick={clearLine}>Clear line</button>
    </div>
  )
}

function clearLine(event){
  const btn = event.target;
  const num = btn.id;
  console.log(num);
  tasks.splice(num, 1)
  console.log(tasks.length)
}

function App() {
  const [count, setCount] = useState(0)
  const [removed, setRemove] = useState(1)

  const handleNewTaskClick = () => {
    setCount(count+1);
    console.log("Presed");
    tasks.push(<NewTask key={count} id={count}/>);
  }
  
  function RenderTasks(){
    return tasks;
  }



  return (
    <div>
      <h1>Deadliner</h1>
      <button onClick={handleNewTaskClick}>New Task</button>
      <br></br>
      <br></br>
      <RenderTasks/>
    </div>
  )
}

export default App
