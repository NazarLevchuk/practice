import React, { useState } from 'react'
import s from './TopBarCart.module.scss'
import { ReactComponent as CartIcon } from '../../../../../img/svg/cart.svg'
import { toggleShowCartActionCreator } from '../../../../../redux/topBarReducer';
import { CartItem } from './CartItem/CartItem';
import { connect } from 'react-redux'


export const TopBarCart = ({ color, dispatch }) => {
	const [showCart, setShowCart] = useState(false);
	const showCartItems = () => {
		setShowCart(!showCart)
		dispatch(toggleShowCartActionCreator())
	}

	let mapStateToProps = (state) => {
		return {
			state: state
		}
	}
	let mapStoreToProps = (dispatch) => {
		return {
			dispatch: dispatch,
		}
	}
	const FeaturedItemsContainer = connect(mapStateToProps, mapStoreToProps)(CartItem)

	return (
		<div className={s.TopBarCart}>
			{showCart ? (
				<div className={s.TopBarCartItems_container}>
					<div className={s.TopBarCartItemsBody}>
						<div onClick={showCartItems}><button className={s.ItemsBodyButton}></button></div>
						<div className={s.ItemsBodyList}><FeaturedItemsContainer /></div>
					</div>
				</div>
			) : null}
			<CartIcon onClick={showCartItems} fill={color} />
		</div>
	)
}
