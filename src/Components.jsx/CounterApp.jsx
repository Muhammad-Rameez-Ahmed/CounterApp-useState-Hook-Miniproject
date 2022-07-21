import React, { useState } from 'react'
import './buttons.css'

const CounterApp = () => {
    const [count, setCount] = useState(0);


    return (
        <>
        <div className="counter">
            <h1 >CounterApp</h1>
            <div>
                <h1 className='label'>{count}</h1>
                <div className='buttons'>
                <button className='button' onClick={()=>setCount(count+1)}>Increment</button>
                <button className='button' onClick={()=>setCount(count-1)}>Decrement</button>
            </div>
            </div>
            </div>
        </>

    )
}

export default CounterApp
