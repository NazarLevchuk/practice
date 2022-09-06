import {applyMiddleware, combineReducers, compose, } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;