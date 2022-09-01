import {applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'
import loggInReducer from "./loggInReducer";
import productsReduser from "./productsReduser";
import topBarReducer from "./topBarReducer";
import cartReduser from "./cartReduser";
import contentPageReduser from "./contentPageReduser";
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
	loggInReducer: loggInReducer,
	productsReduser: productsReduser,
	topBarReducer: topBarReducer,
	cartReduser: cartReduser,
	contentPageReduser: contentPageReduser,
})

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;