import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Button from "./Button";

function App() {

    let initialValue = 0;
    let [counter, setCounter] = useState(initialValue);

    const incrementFunction =  () => {
        setCounter(counter + 1)
    }
    const resetFunction = () => {
        setCounter(initialValue)
    }

    let incButtonDisabled = counter > 4;
    let resetButtonDisabled = counter == 0;

    return (
        <div className="App">
                <div className={"wrapper"}>
                    <div className={"counter"}>
                        <Counter counter={counter}/>
                    </div>
                    <div className={"buttonSection"}>
                        <Button title={"inc"} actionFunction = {incrementFunction} isDisabled = {incButtonDisabled}/>
                        <Button title={"reset"} actionFunction = {resetFunction} isDisabled = {resetButtonDisabled}/>
                    </div>
                </div>
        </div>
    );
}

export default App;
