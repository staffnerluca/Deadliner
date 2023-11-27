function Task(){
    const [amountPerDay, setAmountPerDay] = useState({
        "Mo": 0,
        "Tu": 0,
        "We": 0,
        "Th": 0,
        "Fr": 0,
        "Sa": 0,
        "So": 0
      });

    function onInpAmountChange(){
        changeInputFieldValue()
    }

    function changeInputFieldValue(){
        const divTask = document.getElementById("divTask");
        const amountInputs = divTask.getElementsByClassName("inpDayAmount");
        const onlyOnWorkdays = divTask.getElemen
        if()
        amountInputs.array.forEach(inp => {
            console.log(inp.value);
            inp.value = amountPerDay(inp.placeholder);
        });
    }

    return(
        <div className="divTask">
            <div id={taskID} className="divTask">
                <input className="inpName" placeholder={"Name"}></input> 
                <input className="inpAmount" placeholder={"Amount"} id={inpTotalAmoutnId}></input>
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
                <p id={pDeadlineId} className='deadLine'>Deadline: </p>
                <br></br><br></br>
            </div>
        </div>

    )
}

export default Task;