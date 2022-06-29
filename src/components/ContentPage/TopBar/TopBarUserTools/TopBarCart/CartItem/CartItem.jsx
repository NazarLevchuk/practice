import React from 'react'
import s from './CartItem.module.scss'
import { Item } from './Item/Item'

export const CartItem = ({ state, dispatch }) => {

	const cartList = JSON.parse(localStorage.getItem('cart')) || []

	const result = cartList.reduce(function (sum, current) {
		return +sum + +current.price;
	}, 0);

	let items = cartList.map((item, id) => <Item dispatch={dispatch} item={item} id={id}/>)

	return (
		<div className={s.CartItems}>
			<div className={s.CartTitle}>Your Bag</div>
			<div className={s.CartList}>
				{items}
				<div className={s.CartBottomBar}>
					<div className={s.TotalSumm}>
						Total: ${result}
					</div>
					<button className={s.ConfirmBtn}>Confirm !</button></div>
				</div>
			<div>
		</div>

		</div>
	)
}

