import React,{useState} from 'react'

function CountButton() {
    const [currentCount ,setCurrentCount]= useState(0) 
    
    const handleIncrement= () => {
     setCurrentCount(currentCount + 1)
    };
    const handleDecrement =() => {
        setCurrentCount(currentCount - 1)
    }
    console.log('component re-rendered')
    return (
        <div> 
            <button onClick={handleIncrement}> +1 </button>
            <button onClick = {handleDecrement}> -1 </button>
           
           <div> {currentCount} </div>
            
        </div>
    )
}

export default CountButton; 




