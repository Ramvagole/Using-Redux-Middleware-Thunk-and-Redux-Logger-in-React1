import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import { reducer } from "./Reducer"
import { login } from "./login"
let a=combineReducers({
    value:reducer,
    b:login
})
export let store=legacy_createStore(a,applyMiddleware(thunk))