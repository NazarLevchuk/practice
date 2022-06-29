const REMOVE_ITEM = 'REMOVE-ITEM';
const CHANGE_AMOUTN = 'CHANGE-AMOUTN';
const CONFIRM_PURCHASE = 'CONFIRM';
const SUMM_COUNTER = 'SUMM-COUNTER';
const INCREASE='INCREASE';
const DECREASE='DECREASE';

let initialState = {
	value: 0,
}


const cartReduser = (state = initialState, action) => {

	switch (action.type) {
		case REMOVE_ITEM: {

			const arr = JSON.parse(localStorage.getItem('cart')) || []
			const temp = [...arr]
			temp.splice(action.id.id, 1)
			localStorage.setItem('cart', JSON.stringify(temp))

			return { ...state }
		}
		case INCREASE:
			
			return { ...state, value: state.value + 1 };
		case DECREASE:
			return {...state,value: state.value - 1};
		case CONFIRM_PURCHASE: {
			break
		}
		default:
			return state;
	}
}

export const removeItemActionCreator = (id) => {
	return { type: REMOVE_ITEM, id: { id } }
}
export const changeAmountActionCreator = () => {
	return { type: CHANGE_AMOUTN }
}
export const confirmPurchaseActionCreator = () => {
	return { type: CONFIRM_PURCHASE }
}
export const increaseActionCreator = () => {
	return { type: INCREASE }
}
export const decreaseActionCreator = () => {
	return { type: DECREASE }
}



export default cartReduser;