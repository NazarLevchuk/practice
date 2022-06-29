/* 
import loggInReducer from './loggInReducer';
import productsReduser from './productsReduser';
import topBarReducer from './topBarReducer';

export let store = {
	_state: {
		logginPage:
		{
			inputNameValue: '',
			inputEmailValue: '',
			inputPasswordValue: '',
			logginData: [
				{ name: '' },
			]
		},
		productsPage: {
			productsData: [
				{ 'descriprion': 'Hi-Back Seat', 'price': '42', 'company': 'Marcos', img: img0 },
				{ 'descriprion': 'Hi-Back Sofa', 'price': '32', 'company': 'Caressa', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '72', 'company': 'Caressa', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '76', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '73', 'company': 'Marcos', img: img0 },
				{ 'descriprion': 'Hi-Back Beds', 'price': '11', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '15', 'company': 'Liddy', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '70', 'company': 'Liddy', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '21', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '76', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '73', 'company': 'Marcos', img: img0 },
				{ 'descriprion': 'Hi-Back Beds', 'price': '11', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '15', 'company': 'Liddy', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '70', 'company': 'Liddy', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '21', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '76', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '73', 'company': 'Marcos', img: img0 },
				{ 'descriprion': 'Hi-Back Beds', 'price': '11', 'company': 'Ikea', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '15', 'company': 'Liddy', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '70', 'company': 'Liddy', img: img0 },
				{ 'descriprion': 'Hi-Back Bed', 'price': '21', 'company': 'Ikea', img: img0 },

			],
			productsDataFiltered: [],
		},
		topBarSection: {}
	},
	getState() {
		return this._state
	},

	_callSubscriber() {

		console.log('tree')
	},
	subscribe(observer) {
		this.rerenderTree = observer;
	},

	dispatch(action) {

		this._state.logginPage.inputNameValue = loggInReducer(this._state.logginPage.inputNameValue, action)
		this._state.productsPage = productsReduser(this._state.productsPage, action)
		this._state.topBarSection = topBarReducer(this._state.topBarSection, action)

		this._callSubscriber(this._state)
	}
}


 */