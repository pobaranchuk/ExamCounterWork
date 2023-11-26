import React, {ChangeEvent, useState} from 'react';
import Button from "./Button";

type MenuPropsType = {
    maxValue: number
    startValue: number
    setMaxValueFunction: (value: number) => void
    setStartValueFunction: (value: number) => void
    setCounterValueFunction: (value: number) => void
    isButtonDisabled: boolean
    setIsDisabledFunction: (value: boolean) => void
    setIsValidatedFunction: (value: boolean) => void
    isConfigured: boolean
    setIsConfigured: (value: boolean) => void
}

export const SettingsMenu: React.FC<MenuPropsType> = ({
                                                          maxValue,
                                                          startValue,
                                                          setStartValueFunction,
                                                          setMaxValueFunction,
                                                          setCounterValueFunction,
                                                          setIsDisabledFunction,
                                                          isButtonDisabled,
                                                          setIsValidatedFunction,
                                                          isConfigured,
                                                          setIsConfigured
                                                      }) => {

    let [isValidatedMaxValueField, setIsValidatedMaxValueField] = useState(true)
    let [isValidatedStartValueField, setIsValidatedStartValueField] = useState(true)

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) > startValue && Number(e.currentTarget.value) > 0) {
            setIsValidatedFunction(true)
            setIsValidatedMaxValueField(true)
            setIsDisabledFunction(false)

            setMaxValueFunction(Number(e.currentTarget.value))
        } else {
            setIsValidatedFunction(false)
            setIsValidatedMaxValueField(false)
            setIsDisabledFunction(true)

            setMaxValueFunction(Number(e.currentTarget.value))
        }
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) < maxValue && Number(e.currentTarget.value) >= 0) {
            setIsValidatedFunction(true)
            setIsValidatedStartValueField(true)
            setIsDisabledFunction(false)

            setStartValueFunction(Number(e.currentTarget.value))
        } else {
            setIsValidatedFunction(false)
            setIsValidatedStartValueField(false)
            setIsDisabledFunction(true)

            setStartValueFunction(Number(e.currentTarget.value))
        }
    }

    const SetValues = () => {
        setCounterValueFunction(startValue)
        setIsDisabledFunction(false)

        setIsConfigured(!isConfigured)
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
                <Button title={"set"} actionFunction={SetValues} isDisabled={isButtonDisabled}/>
            </div>
        </div>
    );
};

export default SettingsMenu;