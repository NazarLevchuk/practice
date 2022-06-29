import img1 from '../img/jpg/Items_img/sofa1.jpg'
import img2 from '../img/jpg/Items_img/sofa2.jpg'
import img3 from '../img/jpg/Items_img/sofa3.jpg'
import img4 from '../img/jpg/Items_img/sofa4.jpg'

const ADD_ITEM = 'ADD-ITEM';
const ITEMS_SORTING_COMPANY = 'ITEMS-SORTING-COMPANY';
const ITEMS_SORTING_TEXT = 'ITEMS-SORTING-TEXT';
const ITEMS_SORTING_PRICE = 'ITEMS-SORTING-PRICE';

let initialState = {
	productsData: [
		{ 'descriprion': 'Hi-Back Seat', 'price': '42', 'company': 'Marcos', img: img3 },
		{ 'descriprion': 'Hi-Back Sofa', 'price': '32', 'company': 'Caressa', img: img2 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '72', 'company': 'Caressa', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '76', 'company': 'Ikea', img: img2 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '73', 'company': 'Marcos', img: img1 },
		{ 'descriprion': 'Hi-Back Beds', 'price': '11', 'company': 'Ikea', img: img4 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '15', 'company': 'Liddy', img: img3 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '70', 'company': 'Liddy', img: img2 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '21', 'company': 'Ikea', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '76', 'company': 'Ikea', img: img4 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '73', 'company': 'Marcos', img: img1 },
		{ 'descriprion': 'Hi-Back Beds', 'price': '11', 'company': 'Ikea', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '15', 'company': 'Liddy', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '70', 'company': 'Liddy', img: img2 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '21', 'company': 'Ikea', img: img4 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '76', 'company': 'Ikea', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '73', 'company': 'Marcos', img: img1 },
		{ 'descriprion': 'Hi-Back Beds', 'price': '11', 'company': 'Ikea', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '15', 'company': 'Liddy', img: img2 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '70', 'company': 'Liddy', img: img1 },
		{ 'descriprion': 'Hi-Back Bed', 'price': '21', 'company': 'Ikea', img: img1 },

	],
	productsDataFiltered: '',

}

const productsReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			const newArr = { 
				//Зробити щось з фільтеред дата(сторінка хоум не добавляє ітеми)
				img: state.productsDataFiltered[action.id.id].img, 
				descriprion: state.productsDataFiltered[action.id.id].descriprion, 
				price: state.productsDataFiltered[action.id.id].price, 
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

export default productsReduser;