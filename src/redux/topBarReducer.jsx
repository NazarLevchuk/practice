import { userData } from "../api/api";

const HENDLER_NAV_COLOR_CHANGE = 'HANDLER-NAV-COLOR-CHANGE';
const TOGGLE_SHOW_CART = 'TOGGLE-SHOW-CART';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
	profilePhoto: null,
}

const topBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case HENDLER_NAV_COLOR_CHANGE:
			if (window.location.pathname === '/') {
				action.setColor('white')
				if (window.scrollY > 50) {
					window.addEventListener("scroll", () => {
						action.setColor('black')
					});
				} else {
					window.addEventListener("scroll", () => {
						action.setColor('white')
					});
				}
			} else {
				action.setColor('black')
				window.addEventListener("scroll", () => {
					action.setColor('black')
				});
				
			}
			return state;
		case TOGGLE_SHOW_CART:
			document.querySelector('body').classList.toggle('_active')
			return state;
		case SET_PHOTO:
			return {
				...state, profilePhoto: action.file
			}
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
export const setPhotoActionCreator = (file) => {
	return { type: SET_PHOTO, file}
}

export const savePhotoThunkCreator = (file) => {
	return function (dispatch) {
		userData.savePhotoAPI(file).then(
			dispatch(setPhotoActionCreator(file))
		)
	}
}

export default topBarReducer;