import { itemsAPI } from "../api/api";

const ADD_ITEM = 'ADD-ITEM';
const ITEMS_SORTING_COMPANY = 'ITEMS-SORTING-COMPANY';
const ITEMS_SORTING_TEXT = 'ITEMS-SORTING-TEXT';
const ITEMS_SORTING_PRICE = 'ITEMS-SORTING-PRICE';
const SET_ITEMS_DATA = 'SET-ITEMS-DATA';
const IS_FETCH = 'IS-FETCH';
const RESET_SORT = 'RESET-SORT';
const SET_ITEM_DATA = 'SET_ITEM_DATA';
const SET_REVIEW = 'SET_REVIEW';
const SET_TOTAL_REVIEW_COUNT = 'SET_TOTAL_REVIEW_COUNT';

let initialState = {
	productsData: [],
	productsDataFiltered: '',
	isFetch: false,
	currentItem: {},
	inputReviewValue: '',
	review: [],
	reviewLimit: 5,
	totalReviewCount: 0,
}
const productsReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			const newArr = {
				img: (state.productsDataFiltered || state.productsData)[action.id.id].img,
				descriprion: (state.productsDataFiltered || state.productsData)[action.id.id].descriprion,
				price: (state.productsDataFiltered || state.productsData)[action.id.id].price,
				amount: 1,
			}
			const arr = JSON.parse(localStorage.getItem('cart')) || [];
			arr.push(newArr);
			localStorage.setItem('cart', JSON.stringify(arr))
		}
			return state;
		case ITEMS_SORTING_TEXT: {
			return {
				...state, productsDataFiltered: [...state.productsData].filter((item) => { return item.descriprion.toLowerCase().includes(action.searchText.toLowerCase()) })
			}
		}
		case ITEMS_SORTING_COMPANY: {
			return {
				...state, productsDataFiltered: [...state.productsData].filter((item) => { return item.company.toLowerCase().includes(action.searchCompany.toString().toLowerCase()) })
			}
		}
		case ITEMS_SORTING_PRICE: {
			return {
				...state, productsDataFiltered: [...state.productsData].filter((item) => {
					if (+item.price <= +action.searchPrice) {
						return item
					}
				})
			}
		}
		case RESET_SORT: {
			return {
				...state, productsDataFiltered: ''
			}
		}
		case SET_ITEMS_DATA: {
			return {
				...state, productsData: action.items
			}
		}
		case IS_FETCH: {
			return {
				...state, isFetch: action.isFetch
			}
		}
		case SET_ITEM_DATA: {
			return {
				...state, currentItem: action.currentItem
			}
		}
		case SET_REVIEW: {
			return {
				...state, review: action.review 
			}
		}
		case SET_TOTAL_REVIEW_COUNT: {
			return {
				...state, totalReviewCount: action.review.length
			}
		}
		default:
			return state;
	}
}


export const addItemActionCreator = (id) => {
	return { type: ADD_ITEM, id: { id } }
}
export const itemsSortingCompanyActionCreator = (searchCompany) => {
	return { type: ITEMS_SORTING_COMPANY, searchCompany }
}
export const itemsSortingTextActionCreator = (searchText) => {
	return { type: ITEMS_SORTING_TEXT, searchText }
}
export const itemsSortingPriceActionCreator = (searchPrice) => {
	return { type: ITEMS_SORTING_PRICE, searchPrice }
}
export const setItemsDataActionCreator = (items) => {
	return { type: SET_ITEMS_DATA, items }
}
export const isFetchActionCreator = (isFetch) => {
	return { type: IS_FETCH, isFetch }
}
export const resetSortActionCreator = () => {
	return { type: RESET_SORT }
}
export const setItemDataActionCreator = (currentItem) => {
	return { type: SET_ITEM_DATA, currentItem }
}
export const setReviewActionCreator = (review) => {
	return { type: SET_REVIEW, review }
}
export const setTotalReviewCount = (review) => {
	return { type: SET_TOTAL_REVIEW_COUNT, review }
}

export const getItemsThunkCreator = (count) => {
	return function (dispatch) {
		dispatch(isFetchActionCreator(true))
		itemsAPI.getItemsAPI(count).then(response => {
			dispatch(isFetchActionCreator(false))
			dispatch(setItemsDataActionCreator(response))
		})
	}
}
export const getItemThunkCreator = (id) => {
	return function (dispatch) {
		dispatch(isFetchActionCreator(true))
		itemsAPI.getCurrentItemAPI(id).then(response => {
			dispatch(isFetchActionCreator(false))
			dispatch(setItemDataActionCreator(response))
		})
	}
}
export const getReviewThunkCreator = (id, currentPortion) => {
	console.log(1)
	return function (dispatch) {
		let limit = 5
		itemsAPI.getReviews(id).then(response => {

			dispatch(setTotalReviewCount(response))
		})
		itemsAPI.getReviews(id, currentPortion, limit).then(response => {
			dispatch(setReviewActionCreator(response))
		})
	}
}
export const postReviewThunkCreator = (id, name, value, date, currentPortion) => {
	return function (dispatch) {
		let limit = 5
		itemsAPI.postReviews(id, name, value, date).then(response => {
			dispatch(isFetchActionCreator(true))
			itemsAPI.getReviews(id, currentPortion, limit).then(response => {
				dispatch(isFetchActionCreator(false))
				dispatch(setReviewActionCreator(response))
			})
		}
		)
	}
}
export const deleteReviewThunkCreator = (id, reviewId) => {
	return function (dispatch) {
		dispatch(isFetchActionCreator(true))
		itemsAPI.deleteReviews(id, reviewId).then(response => {
			itemsAPI.getReviews(id).then(response => {
				dispatch(setReviewActionCreator(response))
			})
			dispatch(isFetchActionCreator(false))
		}
		)
	}
}


export default productsReduser;