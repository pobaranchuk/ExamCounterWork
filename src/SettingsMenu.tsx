import React, {ChangeEvent, useState} from 'react';
import Counter from "./Counter";
import Button from "./Button";
import counter from "./Counter";

type MenuPropsType = {
    counter: number
    maxValue: number
    startValue: number
    setMaxValueFunc: (value: number) => void
    setStartValueFunc: (value: number) => void
    setCounterValueFunc: (value: number) => void
    isDisabled: boolean
    setIsDisabledFunc: () => void
    isValidated: boolean
    isValidatedStartValueField:boolean
    isValidatedMaxValueField: boolean
}

export const SettingsMenu: React.FC<MenuPropsType> = ({
                                                          counter,
                                                          maxValue,
                                                          startValue,
                                                          setStartValueFunc,
                                                          setMaxValueFunc,
                                                          setCounterValueFunc,
                                                          setIsDisabledFunc,
                                                          isDisabled,
                                                          isValidated,
                                                          isValidatedStartValueField,
                                                          isValidatedMaxValueField
                                                      }) => {


    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueFunc(Number(e.currentTarget.value))
        setIsDisabledFunc()
    }
    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueFunc(Number(e.currentTarget.value))
    }
    const SetValues = () => {
        setCounterValueFunc(startValue)
        setIsDisabledFunc()
    }

    return (
        <div className={"wrapper"}>
            <div className={"settingsMenu"}>
                <h3>max value: <input className={"isValidatedField"} value={maxValue} type={"number"} onChange={onMaxValueChangeHandler}/></h3>
                <h3>start value: <input value={startValue} type={"number"} onChange={onStartValueChangeHandler}/></h3>
            </div>
            <div className={"buttonSection"}>
                <Button title={"set"} actionFunction={SetValues} isDisabled={isDisabled}/>
            </div>
        </div>
    );
};

export default SettingsMenu;