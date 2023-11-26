import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducers = combineReducers({counterState: counterReducer})
export const store = legacy_createStore(rootReducers)
export type RootStateType = ReturnType<typeof rootReducers>