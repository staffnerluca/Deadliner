import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import ReactDOM from 'react-dom'; 

export function Task(id){
    const [amountPerDay, setAmountPerDay] = useState({
        "Mo": 0,
        "Tu": 0,
        "We": 0,
        "Th": 0,
        "Fr": 0,
        "Sa": 0,
        "So": 0
      });

    const [totalAmount, setTotalAmount] = useState(0);

    const [deadLine, setDeadline] = useState("");

    //starting day

    function checkIfNumber(num){
        const n = parseFloat(num);
        return !isNaN(n);
    }

    
    function onInpAmountChange(event, name){
        const onlyOnWor = true;
        const theSameEveryDay = true;
        let di = amountPerDay;
        const val = event.target.value;
        const keys = Object.keys(di);
        if(theSameEveryDay){
            for(let key in keys){
                di[key] = val;
            }
        }
        else if(onlyOnWor){
            if(name !=="Sa" && name !== "So"){
                for(let key in keys){
                    if(key !== "Sa" && key !== "So"){
                        di[key] = val;
                    }
                }
            }
        }
        else{di[name] = val}
        setAmountPerDay(di);
        
        changeInputs();
    }


    function changeInputs(){
        
    }


    /*function changeInputFieldValue() {
        const amountInputs = Array.from(document.getElementsByClassName("inpDayAmount"));
        const checkOnlyOnWoorkdays = document.getElementsByClassName("inpCheckboxSameOnWorkdays")[0];
        const checkEveryDayTheSame = document.getElementsByClassName("inpCheckboxSameEveryDay")[0];
      
        if (checkEveryDayTheSame.checked) {
          let max = 0;
          amountInputs.forEach(inp => {
            if (inp.value !== "") {
              if (inp.value > max) {
                max = inp.value;
              }
            }
          });
      
          amountInputs.forEach(inp => {
            setAmountPerDay(prev => ({
              ...prev,
              [inp.placeholder]: max
            }));
          });
        } else {
          amountInputs.forEach(inp => {
            setAmountPerDay(prev => ({
              ...prev,
              [inp.placeholder]: inp.value
            }));
          });
        }
      
        if (checkOnlyOnWoorkdays.checked) {
          setAmountPerDay(prev => ({
            ...prev,
            "Sa": 0,
            "So": 0
          }));
        }
      }*/
    
          
    function calculateDeadline() {
        alert("Calculating a deadline");
        let date = new Date();
        let weekday = date.getDay();
      
        if (weekday === 0) {
          weekday = 7;
        }
      
        const amountsList = Object.values(amountPerDay);
        let amountLeft = totalAmount;
        let index = weekday - 1;
        let daysNeeded = 0;
      
        while (amountLeft > 0) {
          amountLeft -= amountsList[index];
          daysNeeded += 1;
      
          index = (index + 1) % 7;
        }
      
        let deadLineDate = new Date();
        deadLineDate.setDate(date.getDate() + daysNeeded);
        setDeadline(deadLineDate.toDateString());
    }
    const totalAmountId = "inpTotalAmount"+id;
    const deadLineId = "pDeadline"+id;

    return(
        <div className="divTask">
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
                <br></br>
                <button onClick={calculateDeadline}>Calculate Deadline</button>
                
            </div>
        </div>
    )
}