import React from 'react';
import './App.css';


type CounterPropsType = {
    counter: number
    startValue: number
    maxValue:number
}
const Counter:  React.FC<CounterPropsType>= ({counter, maxValue, startValue}) => {

    return (
        <div >
            <h1 className={counter === maxValue && counter != startValue ? "number-style": ""}>{counter}</h1>
        </div>
    );
};

export default Counter;