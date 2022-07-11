const ADD_ITEM = 'ADD-ITEM';
const ITEMS_SORTING_COMPANY = 'ITEMS-SORTING-COMPANY';
const ITEMS_SORTING_TEXT = 'ITEMS-SORTING-TEXT';
const ITEMS_SORTING_PRICE = 'ITEMS-SORTING-PRICE';
const SET_ITEMS_DATA = 'SET-ITEMS-DATA';
const IS_FETCH = 'IS-FETCH';
const RESET_SORT = 'RESET-SORT';

let initialState = {
	productsData: [],
	productsDataFiltered: '',
	isFetch: false,

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
				...state,productsDataFiltered: [...state.productsData].filter((item) => { return item.descriprion.toLowerCase().includes(action.searchText.toLowerCase()) })
			}
		}
		case ITEMS_SORTING_COMPANY: {
			return {
				...state,productsDataFiltered: [...state.productsData].filter((item) => { return item.company.toLowerCase().includes(action.searchCompany.toLowerCase()) })
			}
		}
		case ITEMS_SORTING_PRICE: {
			return {
				...state,productsDataFiltered: [...state.productsData].filter((item) => { 
						if (+item.price <= +action.searchPrice) {
							return item
					}
				})
			}
		}
		case RESET_SORT: {
			return {
				...state,productsDataFiltered: ''
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
		default:
			return state;
	}
}

export const addItemActionCreator = (id) => {
	return { type: ADD_ITEM, id: { id } }
}
export const itemsSortingCompanyActionCreator = (searchCompany) => {
	return { type: ITEMS_SORTING_COMPANY, searchCompany: searchCompany }
}
export const itemsSortingTextActionCreator = (searchText) => {
	return { type: ITEMS_SORTING_TEXT, searchText: searchText }
}
export const itemsSortingPriceActionCreator = (searchPrice) => {
	return { type: ITEMS_SORTING_PRICE, searchPrice: searchPrice }
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

export default productsReduser;