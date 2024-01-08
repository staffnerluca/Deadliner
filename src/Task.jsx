import { useEffect, useState, useLayoutEffect } from 'react'
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

    
    function onInpAmountChange(){
        changeInputFieldValue()
    }


    function changeInputFieldValue(){
        //TODO implement this otherwise nothing working
        const divTask = document.getElementsByClassName("divTask");
        const amountInputs = Array.from(divTask.getElementsByClassName("inpDayAmount"));
        const checkOnlyOnWoorkdays = divTask.getElementsByClassName("inpCheckboxSameOnWorkdays");
        const checkEveryDayTheSame = divTask.getElementsByClassName("inpCheckboxSameEveryDay");
        if(checkEveryDayTheSame.checked){
            let max = 0;
            amountInputs.array.forEach(inp => {
                console.log(inp.value);
                if(inp.value != "")
                if(inp.value > max){
                    max = inp.value;
                }
            })
        }

        amountInputs.array.forEach(inp => {
            console.log(inp.value);
            setAmountPerDay(prev => ({
                ...prev,
                [inp.placeholder]: inp.value
            }))
        });

        if(checkOnlyOnWoorkdays.checked){
            setAmountPerDay(prev => ({
                ...prev,
                "Sa": 0,
                "So": 0
            }))
        }

    }

    function calculateDeadline(){
        let date = new Date();
        let weekday = date.getDate();
        
        //Su should be 6 and not 0
        if(weekday === 0){
            weekday = 7;
        }
        weekday -= 1;

        const amountsList = Object.values(amountPerDay);
        let amountLeft = totalAmount;
        let index = weekday;
        let daysNeeded = 0;
        while(amountLeft > 0){
            amountLeft -= amountsList[index];
            daysNeeded += 1;
            if(index+1===7){
                index=0
            }
            else{
                index+=1
            }
        }

        let deadLineDate = new Date();
        deadLineDate.setDate(date.getDate()+daysNeeded);
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
                <input className='inpDayAmount' placeholder="Mo" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="Tu" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="We" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="Th" onChange={onInpAmountChange}></input>
                <input className='inpDayAmount' placeholder="Fr" onChange={onInpAmountChange}></input>
                <input className='inpDayAmount' placeholder="Sa" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="Su" onChange={onInpAmountChange}></input>
                <br></br>
                <p id={deadLineId} className='deadLine'>Deadline: {deadLine}</p>
                <br></br>
                <button onClick={calculateDeadline}>Calculate Deadline</button>
                
            </div>
        </div>
    )
}