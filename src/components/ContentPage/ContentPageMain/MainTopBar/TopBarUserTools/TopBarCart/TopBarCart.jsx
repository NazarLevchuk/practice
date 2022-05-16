import React from 'react'
import s from './TopBarCart.module.scss'
import { ReactComponent as CartIcon } from '../../../../../../img/svg/cart.svg'

export const TopBarCart = () => {
	return (
		<div className={s.TopBarCart}>
			<CartIcon />
		</div>
	)
}
