import { useState } from "react"

export function Test(){
    const [amountPerDay, setAmountPerDay] = useState({
        "Mo": 0,
        "Tu": 0,
        "We": 0,
        "Th": 0,
        "Fr": 0,
        "Sa": 0,
        "So": 0
      });
    function onInpAmountChange(changedByUser){
        console.log("changed input");
    }

    function checkIfUserChanged(){

    }

    function changeInputs(){
        const ch = document.getElementById("changeAll");
        if(ch.checked){
            const inps = document.getElementsByTagName("input");
            
        }
    }

    return(
        <div>
            <p>All: </p><input type="checkbox" id="changeAll"/>
            <input
                className='inpDayAmount'
                placeholder="Mo"
                onChange={(event) => onInpAmountChange(event)}
            />
            <input
                className='inpDayAmount'
                placeholder="Tu"
                onChange={(event) => onInpAmountChange(event)}
            />
            <input
                className='inpDayAmount'
                placeholder="We"
                onChange={(event) => onInpAmountChange(event)}
            />
            <input
                className='inpDayAmount'
                placeholder="Th"
                onChange={(event) => onInpAmountChange(event)}
            />
            <input
                className='inpDayAmount'
                placeholder="Fr"
                onChange={(event) => onInpAmountChange(event)}
            />
            <input
                className='inpDayAmount'
                placeholder="Sa"
                onChange={(event) => onInpAmountChange(event)}
            />
            <input
                className='inpDayAmount'
                placeholder="Su"
                onChange={(event) => onInpAmountChange(event)}
            />
        </div>
    )
}    
    /*
    const inputValues = useState([0]*7)
    function changeAmounts(){
        document.getElementsByClassName()
    }


    return(
        <div>
                <input className='inpDayAmount' placeholder="Mo" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="Tu" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="We" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="Th" onChange={onInpAmountChange}></input>
                <input className='inpDayAmount' placeholder="Fr" onChange={onInpAmountChange}></input>
                <input className='inpDayAmount' placeholder="Sa" onChange={onInpAmountChange}></input> 
                <input className='inpDayAmount' placeholder="Su" onChange={onInpAmountChange}></input> 
        </div>
    )
}*/