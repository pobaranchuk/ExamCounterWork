import React from 'react';
import './App.css';


type CounterPropsType = {
    counter: number
    maxValue: number
}
const Counter: React.FC<CounterPropsType> = ({counter, maxValue}) => {
    return (
        <div>
            <h1 className={counter === maxValue ? "number-style" : ""}>{counter}</h1>
        </div>
    );
};

export default Counter;