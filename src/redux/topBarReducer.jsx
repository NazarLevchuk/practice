const HENDLER_NAV_COLOR_CHANGE = 'HANDLER-NAV-COLOR-CHANGE';
const TOGGLE_SHOW_CART = 'TOGGLE-SHOW-CART';

let initialState = []

const topBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case HENDLER_NAV_COLOR_CHANGE:
			if (window.location.pathname.includes('home')) {
				action.setColor('white')
			} else {
				action.setColor('black')
			}
			return state;
		case TOGGLE_SHOW_CART:
			document.querySelector('body').classList.toggle('_active')
			return state;
		default:
			return state;
	}
}

export const hendlerNavColorChangeActionCreator = (setColor) => {
	return {type: HENDLER_NAV_COLOR_CHANGE, setColor: setColor}
}
export const toggleShowCartActionCreator = () => {
	return { type: TOGGLE_SHOW_CART}
}


export default topBarReducer;