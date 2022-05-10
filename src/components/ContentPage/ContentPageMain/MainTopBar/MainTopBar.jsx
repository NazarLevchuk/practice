import React from 'react'
import './MainTopBar.module.scss'
import s from './MainTopBar.module.scss'
import { TopBarLogOut } from './TopBarLogOut/TopBarLogOut'
import { TopBarNavigation } from './TopBarNavigation/TopBarNavigation'

export const MainTopBar = ({setCloseLoginPage}) => {
	return (
		<div className={s.MainSidebar}>
			<TopBarNavigation />
			<TopBarLogOut setCloseLoginPage={setCloseLoginPage}/>
		</div>
	)
}
