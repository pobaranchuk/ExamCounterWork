import React from 'react';
import Counter from "./Counter";
import Button from "./Button";


type MenuPropsType = {
    counter: number
    incrementCounter: () => void
    resetCounter: () => void
    maxValue: number
    startValue: number
    isDisabled: boolean
    isValidated: boolean
    isSetSet: boolean
    setIsSetSet: (value: boolean) => void
}

const CounterMenu: React.FC<MenuPropsType> = ({
                                                  counter,
                                                  incrementCounter,
                                                  resetCounter,
                                                  maxValue,
                                                  startValue,
                                                  isDisabled,
                                                  isValidated,
                                                  isSetSet,
                                                  setIsSetSet
                                              }) => {

    let incButtonDisabled = counter < maxValue;
    let resetButtonDisabled = counter <= startValue;

    const switchMenu = () => {
        setIsSetSet(!isSetSet)
    }

    return (
        <div className={"wrapper"}>
            <div className={"counter"}>
                <Counter counter={counter} maxValue={maxValue} isDisabled={isDisabled} isValidated={isValidated}/>
            </div>
            <div className={"buttonSection"}>
                <Button title={"inc"} actionFunction={incrementCounter} isDisabled={!incButtonDisabled}/>
                <Button title={"reset"} actionFunction={resetCounter} isDisabled={resetButtonDisabled}/>
                <Button title={"set"} actionFunction={switchMenu}/>
            </div>
        </div>
    );
};

export default CounterMenu;