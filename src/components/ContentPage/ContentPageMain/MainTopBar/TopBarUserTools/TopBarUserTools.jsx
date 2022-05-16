import React from 'react'
import { TopBarCart } from './TopBarCart/TopBarCart'
import { TopBarLogOut } from './TopBarLogOut/TopBarLogOut'
import s from './TopBarUserTools.module.scss'

export const TopBarUserTools = () => {
	return (
		<div className={s.TopBarUserTools}>
			<TopBarLogOut />
			<TopBarCart />
		</div>
	)
}
