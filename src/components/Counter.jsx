import React from 'react'
import { useState } from 'react';

const Counter = function () {

    const [count, Setcount] = useState(0);

    function Increment()
    {
      Setcount(count + 1);
    }
    function Decrement()
    {
      Setcount(count - 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )

}

export default Counter;