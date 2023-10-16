import React, {useEffect, useState} from 'react';
import './App.css';
import SettingsMenu from "./SettingsMenu";
import CounterMenu from "./CounterMenu";

function App() {

    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)

    let [counter, setCounter] = useState(0);

    let [isDisabled, setIsDisabled] = useState(true)

    let [isValidated, setIsValidated] = useState(true)

    // useEffect(() => {
    //
    //     let startValueAsString = localStorage.getItem("startValue")
    //     let maxValueAsString = localStorage.getItem("maxValue")
    //     let isDisabledAsString = localStorage.getItem("isDisabled")
    //
    //
    //     if (startValueAsString) {
    //         let startAsNumber = JSON.parse(startValueAsString)
    //         setStartValue(startAsNumber)
    //     }
    //     if (maxValueAsString) {
    //         let maxValueAsNumber = JSON.parse(maxValueAsString)
    //         setMaxValue(maxValueAsNumber)
    //     }
    //     debugger
    //     if (isDisabledAsString) {
    //
    //         setIsDisabled(!!(isDisabledAsString))
    //     }
    //
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem("startValue", JSON.stringify(startValue))
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    //     localStorage.setItem("isDisabled", JSON.stringify(isDisabled))
    // }, [startValue, maxValue, isDisabled])

    const setCounterValueFunc = (value: number) => {
        setCounter(value)
    }
    const incrementCounter = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(startValue)
    }

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

    function setMaxValueFunction(value: number) {
        setMaxValue(value)
    }

    function setStartValueFunction(value: number) {
        setStartValue(value)
    }

    function setIsDisabledFunc(value: boolean) {
        setIsDisabled(value)
    }

    function setIsValidatedFunc(value: boolean){
        setIsValidated(value)
    }

    return (
        <div className="App">
            <SettingsMenu
                counter={counter}
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
                setIsDisabledFunc={setIsDisabledFunc}
                isValidated={isValidated}
            />
        </div>
    );
}

export default App;