import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import { reducer } from "./Reducer"
let a=combineReducers({
    value:reducer
})
export let store=legacy_createStore(a,applyMiddleware(thunk))