import React from 'react'
import './MainTopBar.module.scss'
import s from './MainTopBar.module.scss'
import { TopBarNavigation } from './TopBarNavigation/TopBarNavigation'
import { TopBarLogo } from './TopBarLogo/TopBarLogo';
import { TopBarUserTools } from './TopBarUserTools/TopBarUserTools';


export const MainTopBar = () => {
	return (
		<div className={s.MainTopBar}>
			<TopBarNavigation />
			<TopBarLogo />
			<TopBarUserTools />
		</div>
	)
}
