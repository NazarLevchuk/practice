import React, { useEffect, useState } from 'react'
import './TopBar.module.scss'
import s from './TopBar.module.scss'
import { TopBarNavigation } from './TopBarNavigation/TopBarNavigation'
import { TopBarLogo } from './TopBarLogo/TopBarLogo';
import { TopBarUserTools } from './TopBarUserTools/TopBarUserTools';
import { useLocation } from 'react-router-dom';


export const TopBar = ({dispatch, setIsLoggedIn}) => {
	const[color, setColor] = useState('')
	const location = useLocation();
	const handlerNavChange = () => dispatch({type: 'HANDLER-NAV-COLOR-CHANGE', setColor});
	useEffect(() => {
		handlerNavChange()
	}, [location])
	
	return (
		<div className={s.MainTopBar}>
			<TopBarNavigation handlerNavChange={handlerNavChange} color={color} />
			<TopBarLogo handlerNavChange={handlerNavChange} />
			<TopBarUserTools setIsLoggedIn={setIsLoggedIn} dispatch={dispatch} color={color} />
		</div>
	)
}

