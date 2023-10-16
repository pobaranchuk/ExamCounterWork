import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button from "./Button";
import SettingsMenu from "./SettingsMenu";
import CounterMenu from "./CounterMenu";

function App() {

    let [startValue, setStartValue] = useState(0)

    let [maxValue, setMaxValue] = useState(0)
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        let valueAsString = localStorage.getItem("startValue")
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setCounter(valueAsNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [startValue, maxValue])

    const setCounterValueFunc = (value:number )=>{
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

    return (
        <div className="App">
            <SettingsMenu
                startValue={startValue}
                setStartValueFunc={setStartValueFunction}
                maxValue={maxValue}
                setMaxValueFunc={setMaxValueFunction}
                setCounterValueFunc={setCounterValueFunc}
            />
            <CounterMenu counter={counter} incrementCounter={incrementCounter} resetCounter={resetCounter} startValue={startValue} maxValue={maxValue}/>
        </div>
    );
}

export default App;