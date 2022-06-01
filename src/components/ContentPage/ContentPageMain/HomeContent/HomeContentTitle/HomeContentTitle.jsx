
import { NavLink } from 'react-router-dom'
import s from './HomeContentTitle.module.scss'


export const HomeContentTitle = () => {


	return (
		<div className={s.HomeContentTitle}>
			<h1>Rest, Relax, Unwind</h1>
			<h2>Embrace your choise - we do</h2>
			<button  type='button'><NavLink to={'/about'} >show now</NavLink></button>
		</div>
		
	)

}
