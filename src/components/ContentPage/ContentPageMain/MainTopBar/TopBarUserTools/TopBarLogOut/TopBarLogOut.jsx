import React from 'react'
import { ReactComponent as ArrowIcon } from '../../../../../../img/svg/arrow.svg'
import s from './TopBarLogOut.module.scss'
import {NavLink} from 'react-router-dom'
export const TopBarLogOut = (/* { setCloseLoginPage } */) => {

/* 	const logOut = () => {
		setCloseLoginPage(false);
	} */

	return (
		<div className={s.TopBarLogOut}>
			<NavLink to={'/'}>
				<button /* onClick={logOut} */><ArrowIcon width={20} height={20} />LogOut</button>
			</NavLink>
		</div>
	)
}
