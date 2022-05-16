import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './MainContentTitle.module.scss'


export const MainContentTitle = () => {
	return (
		<div className={s.MainContentTitle}>
			<h1>Rest, Relax, Unwind</h1>
			<h2>Embrace your choise - we do</h2>
			<button><NavLink to={'/contentpage'}>show now</NavLink></button>
		</div>
	)
}
