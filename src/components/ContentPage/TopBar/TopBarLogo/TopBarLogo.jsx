import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../../img/svg/Logo.svg'
import s from './TopBarLogo.module.scss'
export const TopBarLogo = ({handlerNavChange}) => {
	return (
		<div  className={s.Logo_container}>
			<NavLink onClick={handlerNavChange} to="/"><Logo cursor={'pointer'} /></NavLink>
		</div>
	)
}
