import React, { useState, useRef } from 'react'
import s from './TopBarCart.module.scss'
import { ReactComponent as CartIcon } from '../../../../../img/svg/cart.svg'
import { toggleShowCartActionCreator } from '../../../../../redux/topBarReducer';
import { CartItem } from './CartItem/CartItem';
import { connect } from 'react-redux'
import { Form } from './Form/Form';
import { clearInputFormTextActionCreator, updateInputFormTextActionCreator } from '../../../../../redux/cartReduser';


export const TopBarCart = ({ color, dispatch }) => {
	const [showCart, setShowCart] = useState(false);
	const [showConfirmForm, setShowConfirmForm] = useState(false);

	const showCartItems = () => {
		setShowCart(!showCart)
		dispatch(toggleShowCartActionCreator())
	}
	const sendForm = (e) => {
		e.preventDefault()
		setShowConfirmForm(!showConfirmForm)
		localStorage.removeItem('cart');
		showCartItems()
	}
	const showForm = () => {
		setShowConfirmForm(!showConfirmForm)
		dispatch(clearInputFormTextActionCreator())
	}

	const nameRef = useRef();
	const addressRef = useRef();
	const phoneRef = useRef();

	const onInputChange = () => {
		let name = nameRef.current.value
		let email = addressRef.current.value
		let password = phoneRef.current.value
		dispatch(updateInputFormTextActionCreator(name, email, password))
	}


	let mapStateToProps = (state) => {
		return {
			state: state
		}
	}
	let mapStoreToProps = (dispatch) => {
		return {
			onInputChange: () => onInputChange(),
			showForm: () => showForm(),
			dispatch: dispatch,
			nameRef: nameRef,
			addressRef: addressRef,
			phoneRef: phoneRef,
		}
	}
	let mapFormStoreToProps = (dispatch) => {
		return {
			onInputChange: () => onInputChange(),
			nameRef: nameRef,
			addressRef: addressRef,
			phoneRef: phoneRef,
		}
	}
	const FeaturedItemsContainer = connect(mapStateToProps, mapStoreToProps)(CartItem)
	const FormContainer = connect(mapStateToProps, mapFormStoreToProps)(Form)

	return (
		<div className={s.TopBarCart}>
			{showCart ? (
				<div className={s.TopBarCartItems_container}>
					<div className={s.TopBarCartItemsBody}>
						<div onClick={showCartItems}><button className={s.ItemsBodyButton}></button></div>
						<div className={s.ItemsBodyList}><FeaturedItemsContainer /></div>
					</div>
					{showConfirmForm ? <FormContainer  showForm={showForm} sendForm={sendForm}/> : null}
					<div onClick={showCartItems} className={s.Overlay}></div>
				</div>
			) : null}
			<CartIcon onClick={showCartItems} fill={color} />
		</div>
	)
}
