import img0 from '../img/jpg/Items_img/sofa1.jpg'
export let store = {
	
	_state: {
		userData: [
			{ name: '' },
		],
		ItemData: [
			{'descriprion':'Hi-Back Seat',prise:'40$', img: img0},
			{'descriprion':'Hi-Back Sofa',prise:'30$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
			{'descriprion':'Hi-Back Bed',prise:'70$', img: img0},
		
		],
		inputNameValue: '',
		inputEmailValue: '',
		inputPasswordValue: '',
		inputSearchValue: '',
	},
	isMobile : {
		Android: function() {
				return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
				return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
		}
},

	getState() {
		return this._state
	},
	/* 	userDataStorage(d) {
			localStorage.setItem('name', d.name);
			localStorage.setItem('password', d.password);
			localStorage.setItem('login', d.login);
		}, */
	/* 	handlerNavColorChange (setColor) {
			if(window.location.pathname.includes('home')){
				setColor('white')
			}else {
				setColor('black')
			}
	},
		updateInputText(nameText, emailText, passwordText){
			this._state.inputNameValue = nameText;
			this._state.inputEmailValue = emailText;
			this._state.inputPasswordValue = passwordText;
			rerenderTree()
			console.log(emailText)
		}, */
	rerenderTree() {
		
		console.log('tree')
	},
	rerender(observer) {
		this.rerenderTree = observer;
	},

	

	dispatch(action) {

		if (action.type === 'HANDLER-NAV-COLOR-CHANGE') {

			if (window.location.pathname.includes('home')) {
				action.setColor('white')
			} else {
				action.setColor('black')
			}
		} else if (action.type === 'UPDATE-INPUT-TEXT') {
			this._state.inputNameValue = action.nameText;
			this._state.inputEmailValue = action.emailText;
			this._state.inputPasswordValue = action.passwordText;
			this._state.inputSearchValue = action.searchText;
			this.rerenderTree()

		} else if (action.type === 'USER-DATA-STORAGE') {
			localStorage.setItem('name', action.userDataText.name);
			localStorage.setItem('password', action.userDataText.password);
			localStorage.setItem('login', action.userDataText.login);
		} else if (action.type === 'REMOVE-USER-DATA') {
			localStorage.removeItem('name');
			localStorage.removeItem('password');
			localStorage.removeItem('login');
		}
	}
}


