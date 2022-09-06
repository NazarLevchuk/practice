const REMOVE_ITEM = 'REMOVE-ITEM';
const CHANGE_AMOUTN = 'CHANGE-AMOUTN';
const CONFIRM_PURCHASE = 'CONFIRM';
const INCREASE='INCREASE';
const DECREASE='DECREASE';
const UPDATE_INPUT_FORM_TEXT = 'UPDATE-INPUT-FORM-TEXT';
const CLEAR_INPUT_FORM_TEXT = 'CLEAR-INPUT-TEXT';

let initialState = {
	order: {
		name: '',
		address: '',
		phone: '',
	}
}


const cartReduser = (state = initialState, action) => {

	switch (action.type) {
		case REMOVE_ITEM: {
			
			const arr = JSON.parse(sessionStorage.getItem('cart')) || []
			const temp = [...arr]
			temp.splice(action.id.id, 1)
			sessionStorage.setItem('cart', JSON.stringify(temp))
			if (JSON.parse(sessionStorage.getItem('cart')).length !== 0){
				action.setButtonFormState(false)
			}
			return { ...state }
		}
		case INCREASE:{

			const arr = JSON.parse(sessionStorage.getItem('cart'))
			const temp = [...arr]
			temp[action.id].amount = +temp[action.id].amount + 1
			sessionStorage.setItem('cart', JSON.stringify(temp))
			return{...state}
		}
		case DECREASE: {
			const arr = JSON.parse(sessionStorage.getItem('cart'))
			const temp = [...arr]
			temp[action.id].amount = +temp[action.id].amount <= 1 ? temp[action.id].amount : temp[action.id].amount - 1
			sessionStorage.setItem('cart', JSON.stringify(temp))
			return{...state}
		}
		case UPDATE_INPUT_FORM_TEXT: {
			return {...state, order: {
				name: action.name,
				address: action.address,
				phone: action.phone,
			}
			}
		}
		case CLEAR_INPUT_FORM_TEXT: {
			return {...state, order: {
				name: '',
				address: '',
				phone: '',
			}
			}
		}
		default:
			return state;
	}
}

export const removeItemActionCreator = (id, setButtonFormState) => {
	return { type: REMOVE_ITEM, id: { id }, setButtonFormState: setButtonFormState }
}
export const changeAmountActionCreator = () => {
	return { type: CHANGE_AMOUTN }
}
export const confirmPurchaseActionCreator = () => {
	return { type: CONFIRM_PURCHASE }
}
export const increaseActionCreator = (id) => {
	return { type: INCREASE, id: id}
}
export const decreaseActionCreator = (id) => {
	return { type: DECREASE, id: id}
}
export const updateInputFormTextActionCreator = (name, address, phone) => {
	return { type: UPDATE_INPUT_FORM_TEXT, name: name, address: address, phone: phone}
}
export const clearInputFormTextActionCreator = () => {
	return { type: CLEAR_INPUT_FORM_TEXT }
}




export default cartReduser;