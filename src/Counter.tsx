import React from 'react';
import './App.css';


type CounterPropsType = {
    counter: number
    startValue: number
    maxValue: number
    isDisabled: boolean
    setIsDisabledFunc: (value: boolean) => void
    isValidated: boolean
}
const Counter: React.FC<CounterPropsType> = ({
                                                 counter,
                                                 maxValue,
                                                 startValue,
                                                 setIsDisabledFunc,
                                                 isDisabled,
                                                 isValidated
                                             }) => {

    return (
        <div>
            {
                isDisabled ? isValidated ? <h2>enter values and press 'set'</h2> :
                        <h2 className={"invalidInput"}>Invalid input!</h2> :
                    <h1 className={counter === maxValue ? "number-style" : ""}>{counter}</h1>
            }
        </div>
    );
};

export default Counter;