import React from 'react'
import { TopBarCart } from './TopBarCart/TopBarCart'
import TopBarLogOutContainer from './TopBarLogOutContainer/TopBarLogOutContainer'
import s from './TopBarUserTools.module.scss'

export const TopBarUserTools = ({ color, dispatch, setIsLoggedIn }) => {
	return (
		<div className={s.TopBarUserTools}>
			<TopBarLogOutContainer setIsLoggedIn={setIsLoggedIn} color={color} />
			<TopBarCart dispatch={dispatch} color={color} />
		</div>
	)
}
