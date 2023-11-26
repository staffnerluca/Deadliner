import { useEffect, useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [count, setCount] = useState(0);
  const [removed, setRemove] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [amountPerDay, setAmountPerDay] = useState({
    "Mo": 0,
    "Tu": 0,
    "We": 0,
    "Th": 0,
    "Fr": 0,
    "Sa": 0,
    "So": 0
  });

  function NewTask({id}){
    const btnId = "btnClearline"+id;
    const inpTotalAmoutnId = "inpTotalAmount"+id;
    const pDeadlineId = "pDeadline"+id;
    const taskID = "task"+id;
    console.log("the ID of the task is: "+taskID);
  
    return(
      <div id={taskID} className="divTask">
        <input className="inpName" placeholder={"Name"}></input> 
        <input className="inpAmount" placeholder={"Amount"} id={inpTotalAmoutnId}></input>
        <input className="inpCheckboxSameOnWorkdays" type="checkbox"></input> Only on work days 
        <input className="inpCheckboxSameEveryDay" type="checkbox"></input> The same every day 
        <br></br>
        Amount per day<br></br>
        <input className='inpDayAmount' value={amountPerDay["Mo"]} placeholder='Mo' onChange={onInpAmountChange}></input> 
        <input className='inpDayAmount' value={amountPerDay["Tu"]} placeholder='Tu' onChange={onInpAmountChange}></input> 
        <input className='inpDayAmount' value={amountPerDay["We"]} placeholder='We' onChange={onInpAmountChange}></input> 
        <input className='inpDayAmount' value={amountPerDay["Th"]} placeholder='Th' onChange={onInpAmountChange}></input>
        <input className='inpDayAmount' value={amountPerDay["Fr"]} placeholder='Fr' onChange={onInpAmountChange}></input>
        <input className='inpDayAmount' value={amountPerDay["Sa"]} placeholder='Sa' onChange={onInpAmountChange}></input> 
        <input className='inpDayAmount' value={amountPerDay["So"]} placeholder='Su' onChange={onInpAmountChange}></input>
        <br></br>
        <p id={pDeadlineId} className='deadLine'>Deadline: </p>
        <br></br><br></br>
      </div>
    )
  }
  
  function onInpAmountChange(){
    const onlyOnWorkdays = document.getElementById("inpCheckboxSameOnWorkdays");
    const theSameEveryDay = document.getElementById("inpCheckboxSameEveryDay");
    if(onlyOnWorkdays || theSameEveryDay){
      let tempDic = amoutnsPerDay;
      if(onlyOnWorkdays){
        delete tempDic["Sa"];
        delete tempDic["So"];
      }
  
      let max = 0;
      Object.keys(tempDic).forEach((key) => {
        let val = tempDic[key];
        if(val > max){
          max = val;
        }
      })
      console.log(max)
  
      Object.keys(tempDic).forEach((key) => {
        tempDic[key] = max;
      })
    }
    setAmountPerDay(tempDic);
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
    fillAllAmountInputsWithTheSameValue(num, inputs);
  }
  
  
  //they are filled with the value of the first box that has a value
  function fillAllAmountInputsWithTheSameValue(value, inputs){
    for(let i = 0; i < inputs.length; i++){
      if(weekdays.includes(inputs[i])){
        inputs[i].value = value;
      }
      console.log("Values inserted");
    }
  }
  
  
  function calculateDeadline(amount, id){
    let date = new Date();
    let weekday = today.getDay();
    const amountPerDay = getAmountsFromDayAmountInputsAndReturnArray(id)
    let restAmount = amount;
    while(restAmount > 0){
      restAmount-= amountPerDay[weekday];
      weekday+=1
      date.setDate(date.getDate+1)
    }
    console.log(date);
    const resultLabel = document.getElementById("pDeadline"+id);
    resultLabel.textContent("Deadline"+date.toString());
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

  const handleNewTaskClick = () => {
    setCount(count+1);
    console.log("adding");
    setTasks(odlT => [...odlT, <NewTask key={count} id={count} />], () => {
      testNewTask(count)
    });
  }


  const clearLine = (id) => {
    setRemove(removed+1);
    let reduceTasks = tasks.pop();
    setTask(recu);
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
    parDeadline.textContent = "Deadline: "+deadLine;
  }



  return (
    <div>
      <h1>Deadliner</h1>
      <button onClick={handleNewTaskClick}>Add</button>
      <button className="btnClear" onClick={clearLine}>Remove</button>
      <button onClick={handleCaclDeadlineClick}>Caluclate Deadlines</button>
      <br></br>
      <br></br>
      <RenderTasks/>
    </div>
  )
}

export default App