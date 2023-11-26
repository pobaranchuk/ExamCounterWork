import React from 'react';
import Counter from "./Counter";
import Button from "./Button";


type MenuPropsType = {
    counter: number
    startValue: number
    maxValue: number
    isButtonDisabled: boolean
    isNumberValidated: boolean
    isConfigured: boolean
    incrementCounterFunction: () => void
    resetCounterFunction: () => void
    setIsConfigured: (value: boolean) => void
}

const CounterMenu: React.FC<MenuPropsType> = ({
                                                  counter,
                                                  startValue,
                                                  maxValue,
                                                  isConfigured,
                                                  incrementCounterFunction,
                                                  resetCounterFunction,
                                                  setIsConfigured
                                              }) => {

    let incButtonDisabled = counter < maxValue;
    let resetButtonDisabled = counter <= startValue;

    const switchMenu = () => {
        setIsConfigured(!isConfigured)
    }

    return (
        <div className={"wrapper"}>
            <div className={"counter"}>
                <Counter counter={counter} maxValue={maxValue}/>
            </div>
            <div className={"buttonSection"}>
                <Button title={"inc"} actionFunction={incrementCounterFunction} isDisabled={!incButtonDisabled}/>
                <Button title={"reset"} actionFunction={resetCounterFunction} isDisabled={resetButtonDisabled}/>
                <Button title={"set"} actionFunction={switchMenu}/>
            </div>
        </div>
    );
};

export default CounterMenu;