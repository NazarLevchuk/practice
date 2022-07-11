

import { NavLink } from 'react-router-dom'
import s from './TopBarNavigation.module.scss'

export const TopBarNavigation = ({handlerNavChange, color}) => {

	return (
		<div className={s.TopBarNavigationContainer}>
			<ul>
				<li onClick={handlerNavChange}  style={{ color: `${color}` }}><NavLink to={'/'}>Home</NavLink></li>
				<li onClick={handlerNavChange}  style={{ color: `${color}` }}><NavLink to={'/products'}>Products</NavLink></li>
				<li onClick={handlerNavChange}  style={{ color: `${color}` }}><NavLink to={'/about'}>About</NavLink></li>
			</ul>
		</div>
	)
}
