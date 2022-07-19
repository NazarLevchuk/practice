import React from 'react'
import { TopBarCart } from './TopBarCart/TopBarCart'
import { TopBarLogOut } from './TopBarLogOut/TopBarLogOut'
import s from './TopBarUserTools.module.scss'

export const TopBarUserTools = ({ color, dispatch, setIsLoggedIn }) => {
	return (
		<div className={s.TopBarUserTools}>
			<TopBarLogOut setIsLoggedIn={setIsLoggedIn} dispatch={dispatch} color={color} />
			<TopBarCart dispatch={dispatch} color={color} />
		</div>
	)
}
