import { userData } from "../api/api";

const SET_USER_DATA_STORAGE = 'USER-DATA-STORAGE';
const REMOVE_USER_DATA = 'REMOVE-USER-DATA';

let initialState = {
	inputNameValue: '',
	inputEmailValue: '',
	inputPasswordValue: '',
}

const loggInReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA_STORAGE:{
			
			return state;
		}
			
		case REMOVE_USER_DATA:{

			return state;
		}
			
		default:
			return state;
	}
}

export const userDataStorageActionCreator = (userDataText) => {
	return { type: USER_DATA_STORAGE, userDataText: userDataText }
}
export const removeUserDataActionCreator = () => {
	return {type: REMOVE_USER_DATA}
}


export const setUserDataThunkCreator = (name, email, password) => {
	return function (dispatch) {
		userData.setUserDataAPI(name, email, password).then(response => {
			console.log('sending')
		})
	}
}
export const setCurrentUserDataThunkCreator = (email, password) => {
	return function (dispatch) {
		userData.setCurrentUserDataAPI(email, password).then(response => {
			console.log('sending')
		})
	}
}

export default loggInReducer;