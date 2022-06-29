const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT';
const USER_DATA_STORAGE = 'USER-DATA-STORAGE';
const REMOVE_USER_DATA = 'REMOVE-USER-DATA';

let initialState = {
	inputNameValue: '',
	inputEmailValue: '',
	inputPasswordValue: '',
}

const loggInReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_INPUT_TEXT:{
			return {...state,
			inputNameValue: action.nameText,
			inputEmailValue: action.emailText,
			inputPasswordValue: action.passwordText,
		}
		}
			
		case USER_DATA_STORAGE:{
			localStorage.setItem('name', action.userDataText.name);
			localStorage.setItem('password', action.userDataText.password);
			localStorage.setItem('login', action.userDataText.login);
			return state;
		}
			
		case REMOVE_USER_DATA:{
			localStorage.removeItem('name');
			localStorage.removeItem('password');
			localStorage.removeItem('login');
			return state;
		}
			
		default:
			return state;
	}
}

export const upDateInputTextActionCreator = (nameText, emailText, passwordText) => {
	return { type: UPDATE_INPUT_TEXT, nameText: nameText, emailText: emailText, passwordText: passwordText }
}
export const userDataStorageActionCreator = (userDataText) => {
	return { type: USER_DATA_STORAGE, userDataText: userDataText }
}
export const removeUserDataActionCreator = () => {
	return {type: REMOVE_USER_DATA}
}

export default loggInReducer;