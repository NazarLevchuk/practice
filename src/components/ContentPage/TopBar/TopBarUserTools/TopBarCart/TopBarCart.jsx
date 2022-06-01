import React from 'react'
import s from './TopBarCart.module.scss'
import { ReactComponent as CartIcon } from '../../../../../img/svg/cart.svg'

export const TopBarCart = ({color}) => {
	return (
		<div className={s.TopBarCart}>
			<CartIcon fill={color}/>
		</div>
	)
}
