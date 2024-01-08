import { useState } from "react"

export function Test(){

    const MultipleInputs = () => {
      // Initialize state for input values
      const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    
      // Handle input change
      const handleInputChange = (index, value) => {
        // Update the value of the changed input
        setInputValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = value;
          return newValues;
        });
      };
    
      return (
        <div>
          {/* Render 5 input fields */}
          {inputValues.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
      );
    };    
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