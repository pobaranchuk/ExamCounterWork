export const setCounterValueFuncAC = (value: number) => {
    return {type: "SET-COUNTER-VALUE", value} as const
}
export const incrementCounterAC = () => {
    return {type: "INCREMENT-COUNTER"} as const
}
export const resetCounterAC = () => {
    return {type: "RESET-COUNTER"} as const
}
export const setMaxValueFunctionAC = (value: number) => {
    return {type: "SET-MAX-VALUE", value} as const
}
export const setStartValueFunctionAC = (value: number) => {
    return {type: "SET-START-VALUE", value} as const
}
export const setIsDisabledFuncAC = (value: boolean) => {
    return {type: "SET-IS-DISABLED", value} as const
}
export const setIsValidatedFuncAC = (value: boolean) => {
    return {type: "SET-IS-VALIDATED", value} as const
}

export type ActionType =
    ReturnType<typeof setCounterValueFuncAC>
    | ReturnType<typeof incrementCounterAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof setMaxValueFunctionAC>
    | ReturnType<typeof setStartValueFunctionAC>
    | ReturnType<typeof setIsDisabledFuncAC>
    | ReturnType<typeof setIsValidatedFuncAC>


export const counterState = {
    "startValue": 0,
    "maxValue": 0,
    "counter": 0,
    "isDisabled": true,
    "isValidated": true
}
export type CounterStateType = typeof counterState

export const counterReducer = (state: CounterStateType = counterState, action: ActionType) => {

    switch (action.type) {
        case "SET-COUNTER-VALUE":
            return {...state, counter: action.value}

        case "INCREMENT-COUNTER":
            return {...state, counter: state.counter + 1}

        case "RESET-COUNTER":
            return {...state, counter: state.startValue}

        case "SET-MAX-VALUE":
            return {...state, maxValue: action.value}

        case "SET-START-VALUE":
            return {...state, startValue: action.value}

        case "SET-IS-DISABLED":
            return {...state, isDisabled: action.value}

        case "SET-IS-VALIDATED":
            return {...state, isValidated: action.value}
        default:
            return state;
    }
}

