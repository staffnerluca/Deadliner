import {useState } from 'react'

export function Task({id}){
    const [amountPerDay, setAmountPerDay] = useState({
        "Mo": 0,
        "Tu": 0,
        "We": 0,
        "Th": 0,
        "Fr": 0,
        "Sa": 0,
        "Su": 0
      });

    const [deadLine, setDeadline] = useState("");

    
    function onInpAmountChange(event, name){
        const myDiv = document.getElementById(id);
        const onlyOnWor = myDiv.querySelector(".inpCheckboxSameOnWorkdays").checked;
        const theSameEveryDay = myDiv.querySelector(".inpCheckboxSameEveryDay").checked;
        let di = amountPerDay;
        const val = event.target.value;
        const keys = Object.keys(di);
        console.log(keys)
        if(theSameEveryDay){
            for(let key of keys){
                di[key] = val;
            }
        }
        else if(onlyOnWor){
            if(name !=="Sa" && name !== "Su"){
                for(let key of keys){
                    if(key !== "Sa" && key !== "Su"){
                        di[key] = val;
                        console.log(di)
                    }
                }
            }
        }
        else{di[name] = val}
        setAmountPerDay(di);
        changeInputValues();
    }


    function changeInputValues(){
        const myDiv = document.getElementById(id);
        const inps = myDiv.getElementsByClassName("inpDayAmount");
        for(let inp of inps){
            inp.value = amountPerDay[inp.placeholder];
        }
    }
    
          
    function calculateDeadline() {
        let date = new Date();
        let weekday = date.getDay();

        const inpTotalAmount = document.getElementById("inpTotalAmount"+id);
        const amount = inpTotalAmount.value;
        if (weekday === 0) {
          weekday = 7;
        }
      
        const amountsList = Object.values(amountPerDay);
        let amountLeft = amount;
        alert(amount)
        let index = weekday - 1;
        let daysNeeded = 0;
        while (amountLeft > 0) {
          amountLeft -= amountsList[index];
          daysNeeded += 1;
          index+=1
          if(index===7){
            index = 0
          }
        }      
        let deadLineDate = new Date();
        deadLineDate.setDate(date.getDate() + daysNeeded);
        setDeadline(deadLineDate.toDateString());
    }

    const totalAmountId = "inpTotalAmount"+id;
    const deadLineId = "pDeadline"+id;

    return(
          <div id={id} className="divTask">
              <input className="inpName" placeholder={"Name"}></input> 
              <input className="inpAmount" placeholder={"Amount"} id={totalAmountId}></input>
              <input className="inpCheckboxSameOnWorkdays" type="checkbox"></input> Only on work days 
              <input className="inpCheckboxSameEveryDay" type="checkbox"></input> The same every day 
              <br></br>
              Amount per day<br></br>
              <input className='inpDayAmount' placeholder="Mo" onChange={e => onInpAmountChange(e, "Mo")}></input> 
              <input className='inpDayAmount' placeholder="Tu" onChange={e => onInpAmountChange(e, "Tu")}></input> 
              <input className='inpDayAmount' placeholder="We" onChange={e => onInpAmountChange(e, "We")}></input> 
              <input className='inpDayAmount' placeholder="Th" onChange={e => onInpAmountChange(e, "Th")}></input>
              <input className='inpDayAmount' placeholder="Fr" onChange={e => onInpAmountChange(e, "Fr")}></input>
              <input className='inpDayAmount' placeholder="Sa" onChange={e => onInpAmountChange(e, "Sa")}></input> 
              <input className='inpDayAmount' placeholder="Su" onChange={e => onInpAmountChange(e, "So")}></input>
              <br></br>
              <p id={deadLineId} className='deadLine'>Deadline: {deadLine}</p>
              <button onClick={calculateDeadline}>Calculate Deadline</button><br></br><br></br>  
          </div>
    )
}