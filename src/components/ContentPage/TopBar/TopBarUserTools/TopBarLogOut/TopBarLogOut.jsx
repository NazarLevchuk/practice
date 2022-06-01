import React from 'react'
import { ReactComponent as ArrowIcon } from '../../../../../img/svg/arrow.svg'
import s from './TopBarLogOut.module.scss'
export const TopBarLogOut = ({color, dispatch, setIsLoggedIn}) => {

	const removeUserData = ()=> {
		
		dispatch({type: 'REMOVE-USER-DATA'})
		setIsLoggedIn(localStorage.getItem('login'))
	}

	return (
		<div className={s.TopBarLogOut}>
				<button onClick={removeUserData} style={{ color: `${color}` }} ><ArrowIcon fill={color} width={20} height={20} />LogOut</button>
		</div>
	)
}
