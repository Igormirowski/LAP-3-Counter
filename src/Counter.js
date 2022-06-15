import React, { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h3>Count: {counter}</h3>

            <button>
                add one
            </button>
        </div>
    )
}



export default Counter;
