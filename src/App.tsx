import React, {useEffect, useState} from 'react';
import './App.css';
import SettingsMenu from "./SettingsMenu";
import CounterMenu from "./CounterMenu";

function App() {

    let [isConfigured, setIsConfigured] = useState(false)

    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)

    let [counter, setCounter] = useState(0);

    let [isButtonDisabled, setIsButtonDisabled] = useState(true)

    let [isNumberValidated, setIsNumberValidated] = useState(true)


    const setCounterValueFunction = (value: number) => {
        setCounter(value)
    }
    const incrementCounterFunction = () => {
        setCounter(counter => counter + 1)
    }
    const resetCounterFunction = () => {
        setCounter(startValue)
    }

    function setMaxValueFunction(value: number) {
        setMaxValue(value)
    }

    function setStartValueFunction(value: number) {
        setStartValue(value)
    }

    function setIsButtonDisabledFunction(value: boolean) {
        setIsButtonDisabled(value)
    }

    function setIsValidatedFunction(value: boolean) {
        setIsNumberValidated(value)
    }

    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem("startValue")
    //     let maxValueAsString = localStorage.getItem("maxValue")
    //     let isDisabledAsString = localStorage.getItem("isButtonDisabled")
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
    // useEffect(() => {
    //     localStorage.setItem("startValue", JSON.stringify(startValue))
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    //     localStorage.setItem("isButtonDisabled", JSON.stringify(isButtonDisabled))
    // }, [startValue, maxValue, isButtonDisabled])
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
            {isConfigured ?
                <CounterMenu
                    counter={counter}
                    startValue={startValue}
                    maxValue={maxValue}
                    isButtonDisabled={isButtonDisabled}
                    isNumberValidated={isNumberValidated}
                    isConfigured={isConfigured}
                    incrementCounterFunction={incrementCounterFunction}
                    resetCounterFunction={resetCounterFunction}
                    setIsConfigured={setIsConfigured}
                />
                :
                <SettingsMenu
                    startValue={startValue}
                    setStartValueFunction={setStartValueFunction}
                    maxValue={maxValue}
                    setMaxValueFunction={setMaxValueFunction}
                    setCounterValueFunction={setCounterValueFunction}
                    isButtonDisabled={isButtonDisabled}
                    setIsDisabledFunction={setIsButtonDisabledFunction}
                    setIsValidatedFunction={setIsValidatedFunction}
                    isConfigured={isConfigured}
                    setIsConfigured={setIsConfigured}
                />
            }
        </div>
    );
}

export default App;