import React, {useState} from 'react';
import "./index.css";
export const Counter = ({name, onChangeCouter}) => {
    const [count, setCount] = useState(0);
    const change = () =>{
        setCount(count+1);
        onChangeCouter(count+1);
    }
    return (
        <div>
            <h2>{name}</h2>
            <div className="counter"> count = <h2>{count}</h2></div>
            <button onClick={change}> Add One </button>
        </div>
    );
};
