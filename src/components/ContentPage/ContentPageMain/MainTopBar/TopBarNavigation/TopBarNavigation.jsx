import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './TopBarNavigation.module.scss'


export const TopBarNavigation = () => {
	return (
		<div className={s.TopBarNavigation_container}>
			<ul>
				<li><NavLink to={'/home'}>Home</NavLink></li>
				<li><NavLink to={'/products'}>Products</NavLink></li>
				<li><NavLink to={'/about'}>About</NavLink></li>
			</ul>
		</div>
	)
}
