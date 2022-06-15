import React, { useState } from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(100)
   

    const onBtnClick = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
           
            <h3>Count: {counter}</h3>
            <button
            className='btn btn-danger' 
            onClick={() => onBtnClick()}>
                remove one
            </button>
        </div>
    )
}



export default Counter;
