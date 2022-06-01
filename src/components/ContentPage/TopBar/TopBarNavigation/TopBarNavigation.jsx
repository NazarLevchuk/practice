
import { NavLink } from 'react-router-dom'
import s from './TopBarNavigation.module.scss'

export const TopBarNavigation = ({handlerNavChange, color}) => {
	

	return (
		<div className={s.TopBarNavigation_container}>
			<ul>
				<li onClick={handlerNavChange} style={{ color: `${color}` }}><NavLink to={'/home'}>Home</NavLink></li>
				<li onClick={handlerNavChange} style={{ color: `${color}` }}><NavLink to={'/products'}>Products</NavLink></li>
				<li onClick={handlerNavChange} style={{ color: `${color}` }}><NavLink to={'/about'}>About</NavLink></li>
			</ul>
		</div>
	)
}
