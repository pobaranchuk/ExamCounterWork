import React from 'react';
import './App.css';


type CounterPropsType = {
    counter: number
}
const Counter:  React.FC<CounterPropsType>= ({counter}) => {
    return (
        <div >
            <h1 className={counter === 5 ? "number-style": ""}>{counter}</h1>
        </div>
    );
};

export default Counter;