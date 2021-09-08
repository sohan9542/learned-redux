import { CounterReducer } from "./counter";
import { isloggedreducer } from "./islogged";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    counter: CounterReducer,
    islogged: isloggedreducer
})