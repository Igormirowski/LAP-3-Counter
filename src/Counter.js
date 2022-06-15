import React, { useState } from 'react';


const Counter = () => {
    const [counter, setCounter] = useState(0)

    const onBtnClick = () => {
        setCounter(counter +1)
    }

    return (
        <div>
            <h3>Count: {counter}</h3>

            <button onClick={() => onBtnClick()}>
                add one
            </button>
        </div>
    )
}



export default Counter;
