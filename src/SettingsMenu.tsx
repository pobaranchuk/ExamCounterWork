import React, {ChangeEvent} from 'react';
import Counter from "./Counter";
import Button from "./Button";
import counter from "./Counter";

type MenuPropsType = {
    maxValue: number
    startValue: number
    setMaxValueFunc: (value: number) => void
    setStartValueFunc: (value: number) => void
    setCounterValueFunc: (value: number) => void
}

export const SettingsMenu: React.FC<MenuPropsType> = ({maxValue, startValue, setStartValueFunc, setMaxValueFunc, setCounterValueFunc}) => {

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueFunc(Number(e.currentTarget.value))
    }
    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueFunc(Number(e.currentTarget.value))
    }
    const SetValues = () => {
        setCounterValueFunc(startValue)
    }

    return (
        <div className={"wrapper"}>
            <div className={"settingsMenu"}>
                <h3>max value: <input value={maxValue} type={"number"} onChange={onMaxValueChangeHandler}/></h3>
                <h3>start value: <input value={startValue} type={"number"} onChange={onStartValueChangeHandler}/></h3>
            </div>
            <div className={"buttonSection"}>
                <Button title={"set"} actionFunction = {SetValues}/>
            </div>
        </div>
    );
};

export default SettingsMenu;