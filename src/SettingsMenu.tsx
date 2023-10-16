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
    setIsDisabledFunc: (value: boolean) => void
    setIsValidatedFunc: (value: boolean) => void
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
                                                          setIsValidatedFunc,
                                                      }) => {

    let [isValidatedStartValueField, setIsValidatedStartValueField] = useState(true)
    let [isValidatedMaxValueField, setIsValidatedMaxValueField] = useState(true)

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) <= startValue || Number(e.currentTarget.value) < 0) {
            setIsValidatedFunc(false)
            setIsValidatedMaxValueField(false)
            setIsDisabledFunc(true)
        } else {
            setIsValidatedFunc(true)
            setIsValidatedMaxValueField(true)
            setIsDisabledFunc(false)
        }
        setMaxValueFunc(Number(e.currentTarget.value))
    }
    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= maxValue || Number(e.currentTarget.value) < 0) {
            setIsValidatedFunc(false)
            setIsValidatedStartValueField(false)
            setIsDisabledFunc(true)
        } else {
            setIsValidatedFunc(true)
            setIsValidatedStartValueField(true)
            setIsDisabledFunc(false)
        }

        setStartValueFunc(Number(e.currentTarget.value))

    }
    const SetValues = () => {
        setCounterValueFunc(startValue)
        setIsDisabledFunc(false)
    }

    return (
        <div className={"wrapper"}>
            <div className={"settingsMenu"}>
                <h3>max value: <input className={isValidatedMaxValueField ? "" : "notValidatedField"} value={maxValue}
                                      type={"number"} onChange={onMaxValueChangeHandler}/></h3>
                <h3>start value: <input className={isValidatedStartValueField ? "" : "notValidatedField"}
                                        value={startValue} type={"number"} onChange={onStartValueChangeHandler}/></h3>
            </div>
            <div className={"buttonSection"}>
                <Button title={"set"} actionFunction={SetValues} isDisabled={isDisabled}/>
            </div>
        </div>
    );
};

export default SettingsMenu;