import React, {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="counter"> count = <h2>{count}</h2></div>
            <button onClick={()=> {setCount(count+1)}}> Add One </button>
        </div>
    );
};
