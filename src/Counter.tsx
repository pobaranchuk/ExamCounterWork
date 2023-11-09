import React from 'react';
import './App.css';


type CounterPropsType = {
    counter: number
    maxValue: number
    isDisabled: boolean
    isValidated: boolean
}
const Counter: React.FC<CounterPropsType> = ({
                                                 counter,
                                                 maxValue,
                                                 isValidated,
                                                 isDisabled

                                             }) => {

    return (
        <div>
            {
                isValidated ?
                    isDisabled ?
                        <h2>enter values and press 'set'</h2> :
                        <h1 className={counter === maxValue ?
                            "number-style" :
                            ""}>{counter}</h1> :
                    <h2 className={"invalidInput"}>Invalid input!</h2>
            }
        </div>
    );
};

export default Counter;