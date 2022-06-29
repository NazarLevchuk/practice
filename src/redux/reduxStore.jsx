import {combineReducers, } from "redux";
import { legacy_createStore as createStore} from 'redux'
import loggInReducer from "./loggInReducer";
import productsReduser from "./productsReduser";
import topBarReducer from "./topBarReducer";
import cartReduser from "./cartReduser";


let redusers = combineReducers({
	loggInReducer: loggInReducer,
	productsReduser: productsReduser,
	topBarReducer: topBarReducer,
	cartReduser: cartReduser,
})

let store = createStore(redusers);

/* let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
	}
}
 */
export default store;