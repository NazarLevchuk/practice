import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../../img/svg/Logo.svg'
import s from './TopBarLogo.module.scss'
export const TopBarLogo = ({handlerNavChange}) => {
	return (
		<div onClick={handlerNavChange} className={s.Logo_container}>
			<NavLink to="/home"><Logo  /></NavLink>
		</div>
	)
}
