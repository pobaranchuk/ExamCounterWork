import React, {useEffect, useState} from 'react';
import './App.css';
import SettingsMenu from "./SettingsMenu";
import CounterMenu from "./CounterMenu";
import {useDispatch, useSelector} from "react-redux";
import {
    incrementCounterAC,
    resetCounterAC,
    setCounterValueFuncAC, setIsDisabledFuncAC, setIsValidatedFuncAC,
    setMaxValueFunctionAC,
    setStartValueFunctionAC
} from "./state/counterReducer";
import {RootStateType} from "./state/store";

function App() {

    let startValue = useSelector<RootStateType, number>(state => state.counterState.startValue)
    let maxValue = useSelector<RootStateType, number>(state => state.counterState.maxValue)
    let counter = useSelector<RootStateType, number>(state => state.counterState.counter)
    let isDisabled = useSelector<RootStateType, boolean>(state => state.counterState.isDisabled)
    let isValidated = useSelector<RootStateType, boolean>(state => state.counterState.isValidated)

    const dispatch = useDispatch()

    const setCounterValueFunc = (value: number) => {
        let action = setCounterValueFuncAC(value)
        dispatch(action)
    }
    const incrementCounter = () => {
        let action = incrementCounterAC()
        dispatch(action)
    }
    const resetCounter = () => {
        let action = resetCounterAC()
        dispatch(action)
    }

    function setMaxValueFunction(value: number) {
        let action = setMaxValueFunctionAC(value)
        dispatch(action)
    }

    function setStartValueFunction(value: number) {
        let action = setStartValueFunctionAC(value)
        dispatch(action)
    }

    function setIsDisabledFunc(value: boolean) {
        let action = setIsDisabledFuncAC(value)
        dispatch(action)
    }

    function setIsValidatedFunc(value: boolean) {
        let action = setIsValidatedFuncAC(value)
        dispatch(action)
    }

    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem("startValue")
    //     let maxValueAsString = localStorage.getItem("maxValue")
    //     let isDisabledAsString = localStorage.getItem("isDisabled")
    //
    //     if (startValueAsString) {
    //         let startAsNumber = JSON.parse(startValueAsString)
    //         setStartValue(startAsNumber)
    //         setCounter(startAsNumber)
    //     }
    //     if (maxValueAsString) {
    //         let maxValueAsNumber = JSON.parse(maxValueAsString)
    //         setMaxValue(maxValueAsNumber)
    //     }
    //
    //     if (isDisabledAsString) {
    //         let booleanIsDisabled = "true"
    //         setIsDisabled(isDisabledAsString === booleanIsDisabled)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem("startValue", JSON.stringify(startValue))
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    //     localStorage.setItem("isDisabled", JSON.stringify(isDisabled))
    // }, [startValue, maxValue, isDisabled])
    // const getFromLocalStorage = () => {
    //     let valueAsString = localStorage.getItem("counterValue")
    //     if (valueAsString) {
    //         let valueAsNumber = JSON.parse(valueAsString)
    //         setCounter(valueAsNumber)
    //     }
    // }
    // const clearLocalStorage = () => {
    //     localStorage.clear()
    //     setCounter(0)
    // }
    // const removeItemFromLocalStorage = () => {
    //     localStorage.removeItem("counterValue")
    // }
    // const setToLocalStorage = () => {
    //     localStorage.setItem("counterValue", JSON.stringify(counter))
    // }


    return (
        <div className="App">
            <SettingsMenu
                startValue={startValue}
                setStartValueFunc={setStartValueFunction}
                maxValue={maxValue}
                setMaxValueFunc={setMaxValueFunction}
                setCounterValueFunc={setCounterValueFunc}
                isDisabled={isDisabled}
                setIsDisabledFunc={setIsDisabledFunc}
                setIsValidatedFunc={setIsValidatedFunc}
            />
            <CounterMenu
                counter={counter}
                incrementCounter={incrementCounter}
                resetCounter={resetCounter}
                startValue={startValue}
                maxValue={maxValue}
                isDisabled={isDisabled}
                isValidated={isValidated}
            />
        </div>
    );
}

export default App;