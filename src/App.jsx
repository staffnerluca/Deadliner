import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function NewTask(){
  return(
    <div className="divTask">
      Name: <input className="inpName" value={"Name"}></input> <input className="inpUnit" value={"Unit"}></input>
      <input className="inpCheckbox" type="checkbox"></input> Only on work days <input type="checkbox"></input> The same every day <button>Clear line</button>
    </div>
  )
}

function conectToCalendar(){

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Deadliner</h1>
      <button>Connect to Google calendar</button>
    </div>
  )
}

export default App
