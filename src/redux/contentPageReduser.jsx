import { itemsAPI, userData } from "../api/api";
import { isFetchActionCreator, setItemsDataActionCreator } from "./productsReduser";

const SET_USER_NAME = 'SET_USER_NAME';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
	email: '',
	initialized: false
}

const contentPageReduser = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_NAME:
			return {
				...state, email: action.email
			}
		case INITIALIZED_SUCCESS:
			return {
				...state, initialized: true
			}

		default:
			return state;
	}
}

export const setUserNameActionCreator = (email) => {
	return { type: SET_USER_NAME, email }
}
export const initializedSuccess = () => {
	return { type: INITIALIZED_SUCCESS }
}


export const initializeApp = () => (dispatch) => {

	let getUser = userData.getUserDataAPI().then(response => {
		dispatch(setUserNameActionCreator(response.email))

	})
	let getItems = dispatch(isFetchActionCreator(true))
		itemsAPI.getItemsAPI().then(response => {
			dispatch(isFetchActionCreator(false))
			dispatch(setItemsDataActionCreator(response))
		})

	Promise.all([getUser, getItems]).then(() => { dispatch(initializedSuccess())})
}


export default contentPageReduser;