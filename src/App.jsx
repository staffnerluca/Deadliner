import { useState } from 'react'
import ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const tasks = []
const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


function NewTask({id}){
  const btnId = "btn"+id;
  const inpTotalAmoutnId = "inpTotalAmount"+id;
  return(
    <div className="divTask">
      <input className="inpName" placeholder={"Name"}></input> 
      <input className="inpAmount" placeholder={"Amount"} id={inpTotalAmoutnId}></input>
      <input className="inpCheckboxSameOnWorkdays" type="checkbox"></input> Only on work days 
      <input className="inpCheckboxSameEveryDay" type="checkbox"></input> The same every day 
      <button id={btnId} onClick={clearLine}>Clear line</button>
      <br></br>
      Amount per day<br></br>
      <input className='inpDayAmount' placeholder='Mo'></input> 
      <input className='inpDayAmount' placeholder='Tu'></input> 
      <input className='inpDayAmount' placeholder='We'></input> 
      <input className='inpDayAmount' placeholder='Th'></input>
      <input className='inpDayAmount' placeholder='Fr'></input>
      <input className='inpDayAmount' placeholder='Sa'></input> 
      <input className='inpDayAmount' placeholder='Su'></input>
      <br></br>
      <p className='deadLine'>Deadline: </p>
      <br></br><br></br>
    </div>
  )
}

function handleTickTheSameEveryDayOrOnlyOnWorkdays(event, id){
  const btn = event.target;
  const type = btn.className;
  let onlyOnWorkdays = false;
  if(type === "inpCheckboxSameOnWorkdays"){
    onlyOnWorkdays = true;
  }

  const wholeDiv = document.getElementById("div"+id);
  const inputs = wholeDiv.getElementsByTagName(input);
  let num = 0;
  for(let i = 0; i < inputs.length; i++){
    let val = inputs[i].value;
    let day = inputs[i].placeholder;
    if(num === 0 && val !== undefined && weekdays.includes(day)){
      num = inputs[i].value;
      break;
    }
  }
  fillAllAmountInputsWithTheSameValue(num, id);

}

s
//they are filled with the value of the first box that has a value
function fillAllAmountInputsWithTheSameValue(value, id){
  for(let i = 0; i < inputs.length; i++){
  }
}


function calculateDeadline(days, amount, id){
  let date = new Date();
  let weekday = today.getDay();
  const amountPerDay = getAmountsFromDayAmountInputsAndReturnArray(id)
  let restAmount = amount;
  while(restAmount > 0){
    restAmount-=amoutnsPerDay[weekday];
    weekday+=1
    date.setDate(date.getDate+1)
  }
  console.log(date);
  return date;
}


function getAmountsFromDayAmountInputsAndReturnArray(id){
  let amoutnsPerDay = {
    Mo: 0,
    Tu: 0,
    We: 0,
    Th: 0,
    Fr: 0,
    Sa: 0,
    Su: 0
  }
  const taskDiv = document.getElementById(id);
  const inps = taskDiv.getElementsByTagName("input");
  for(let i = 0; i < inps.lengt; i++){
    currentInpu = inps[i];
    if(amoutnsPerDay[currentInpu.placeholder] !== undefined){ 
      amoutnsPerDay[currentInpu.placeholder] = currentInpu.value;
    }
    else{
      console.log("Placeholder not found in amounts");
    }
  }
  return amoutnsPerDay;
}


function getAmount(id){
  const inpAmoutn = document.getElementById("inpTotalAmount"+id);
  return inpAmoutn.value;
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

  function handleCaclDeadlineClick(event){
    const pressesButton = event.target;
    const btnId = pressesButton.id;

    //n = last letter before id; \d+ tells us to look for 1 or more digits behind that letter
    const regExpForId = btnId.match(/n(\d+)/);
    let id = 0;
    if(regExpForId){
      id = regExpForId[1]
    }
    const days = getAmountsFromDayAmountInputsAndReturnArray(id)
    const deadLine = calculateDeadline(days, getAmount(id));
    const parDeadline = document.getElementById("deadline");
    parDeadline.textContent = "Deadline: "+date;
  }


  return (
    <div>
      <h1>Deadliner</h1>
      <button onClick={handleNewTaskClick}>New Task</button>
      <button onClick={handleCaclDeadlineClick}>Caluclate Deadlines</button>
      <br></br>
      <br></br>
      <RenderTasks/>
    </div>
  )
}

export default App